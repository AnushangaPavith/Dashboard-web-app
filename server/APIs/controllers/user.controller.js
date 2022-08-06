// import packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// import user model
const User = require('../models/user.model');

exports.register = async (req, res) => {
    // hash the password with salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // check whether empID exists in the employees table
    const empID = req.body.empID;
    // const empStatus = await mc.query(`SELECT * FROM employees WHERE empID = '${empID}'`);

    // create a user object
    const user = new User({
        empID: empID,
        password: hashedPassword
    });

    // print empID
    console.log(empID);

    // create a new user
    const response = await User.create(user);

    // if user exists
    if (response === 0) {
        res.status(400).send('User already exists');
    }
    else if (response === 2) {
        res.status(406).send('User not found.');
    }
    else {
        res.status(201).send('User added');
    }
}

// Login User
exports.login = async (req, res) => {
    const user = await User.login(req.body);
    if (user) {
        // compare the password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).send('Invalid password');
        } else {
            // create a token
            const token = jwt.sign({ empID: user.empID, admin: user.admin }, dotenv.config().parsed.JWT_KEY , { expiresIn: '1h' });
            // set header and send the token and set the status code to 200
            res.header('auth-token', token).send({
                "token": token,
                "empID": user.empID,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "admin": user.admin
            });
        }
    }
    else {
        res.status(400).send('Login failed');
    }
}