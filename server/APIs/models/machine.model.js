
const sql = require("./db.js");

// machine constructor
const Machine = function (machine) {
    this.machineID = machine.machineID;
    this.moldID = machine.moldID;
    this.moldShots = machine.moldShots;
    this.failedShots = machine.failedShots;
    this.prodRate = machine.prodRate;
    this.prod_start_date = machine.prod_start_date;
    this.prod_end_date = machine.prod_end_date;
    this.Ejector_position = machine.Ejector_position;
    this.Cycle_time = machine.Cycle_time;
    this.Cooling_time = machine.Cooling_time;
    this.Actual_position = machine.Actual_position;
    this.Actual_pressure = machine.Actual_pressure;
    this.Actual_rot_speed = machine.Actual_rot_speed;
}

// check whether a machine exists in the machines table
Machine.checkMachine = async (machineID) => {
    const row = await sql.query("SELECT * FROM machines WHERE machineID = ?", [machineID]);
    if (row.length > 0) {
        return true;
    }
    return false;
}

// check whether a mold exists in the machines table
Machine.checkMold = async (moldID) => {
    const row = await sql.query("SELECT * FROM machines WHERE moldID = ?", [moldID]);
    if (row.length > 0) {
        return true;
    }
    return false;
}

// create a new machine
Machine.create = async (newMachine) => {
    // insert the new machine into machines table
    await sql.query("INSERT INTO machines SET ?", newMachine);
    return true;
}



Machine.all = function(data,callback){
    var sqlmachines = "SELECT * FROM machines;"
    
    // check whether empID exists in the employees table
    const status = sql.query(sqlmachines,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}


Machine.show = function(data,callback){
    var sqlmachines = "SELECT * FROM machines where machineID = ?;"

    // check whether empID exists in the employees table
    const status = sql.query(sqlmachines,data.machineID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}

Machine.update = function(data,callback){

    console.log(data.machineID);
    const updateMoldShots = "UPDATE machines SET moldShots = moldShots + 1 WHERE machineID = ?;"
    // check whether empID exists in the employees table
    const status = sql.query(updateMoldShots,data.machineID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
    if(data.failedShots==1){
        const updateFailedShots = "UPDATE machines SET failedShots = failedShots + 1 WHERE machineID = ? ;"
        sql.query(updateFailedShots,data.machineID,(err,result)=>{
            if(err)throw err;
            // res.send(result);
            console.log(result);
            console.log("update");
        })
    }

}


Machine.delete = function(data,callback){
    var sqlmachines = "DELETE FROM machines WHERE machineID = ?;"

    // check whether empID exists in the employees table
    const status = sql.query(sqlmachines,data.machineID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}
module.exports = Machine;