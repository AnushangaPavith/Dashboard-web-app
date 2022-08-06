
const sql = require("./db.js");

// mold constructor
const Mold = function (mold) {
    this.moldID = mold.moldID;
    this.monaNumber = mold.monaNumber;
    this.material = mold.material;
    this.moldMaker = mold.moldMaker;
}

// check whether a mold exists in the molds table
Mold.checkMold = async (moldID) => {
    const row = await sql.query("SELECT * FROM molds WHERE moldID = ?", [moldID]);
    if (row.length > 0) {
        return true;
    }
    return false;
}

// create a new mold
Mold.create = async (newMold) => {
    // insert the new mold into molds table
    await sql.query("INSERT INTO molds SET ?", newMold);
    return true;
}


Mold.all = function(data,callback){
    var sqlmolds = "SELECT * FROM molds;"

    // check whether empID exists in the employees table
    const status = sql.query(sqlmolds,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}

Mold.show = function(data,callback){
    var sqlmachines = "SELECT * FROM molds where moldID = ?;"

    // check whether empID exists in the employees table
    const status = sql.query(sqlmachines,data.moldID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}

Mold.delete = function(data,callback){
    var sqlmachines = "DELETE FROM molds WHERE moldID = ?;"

    // check whether empID exists in the employees table
    const status = sql.query(sqlmachines,data.moldID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}

module.exports = Mold;