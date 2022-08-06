const sql = require("./db.js");

// user constructor
const User = function (user) {
    this.empID = user.empID;
    this.password = user.password;
}

// create a new user
User.create = async (newUser) => {
    // check whether empID exists in the employees table
    const empStatus = await sql.query(`SELECT * FROM employees WHERE empID = '${newUser.empID}'`);

    // if empID exists
    if (empStatus.length > 0) {
        // check whether the empID exists in passwords table
        const pwStatus = await sql.query(`SELECT * FROM passwords WHERE empID = '${newUser.empID}'`);
        // if empID exists in passwords table
        if (pwStatus.length > 0) {
            // user already exists
            return 0;
        } else {
            // insert the new user into passwords table
            await sql.query("INSERT INTO passwords SET ?", newUser);
                // if (err) {
                //     console.log("error: ", err);
                //     return err;
                // }
                console.log("user added");
                return 1;
        }
    }
    else {
        // empID does not exist
        return 2;
    }
}

// login a user
User.login = async (user) => {
    // check whether empID exists in the passwords table
    const row = await sql.query(`SELECT * FROM passwords WHERE empID = '${user.empID}'`);

    if (row.length > 0) {
        // return the row in the passwords table joined with the employees table
        const result = await sql.query(`SELECT * FROM passwords JOIN employees ON passwords.empID = employees.empID WHERE passwords.empID = '${user.empID}'`);
        return result[0];
    } else {
        // throw new Error("User does not exist");
        return 0;
    }
}


// export the user model
module.exports = User;