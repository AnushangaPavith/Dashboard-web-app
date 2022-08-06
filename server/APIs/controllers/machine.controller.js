
// import user model
const Machine = require('../models/machine.model');

const dotenv = require('dotenv');

exports.all = async (req, res) => {
    var data = req.body;

    // create a new user
    const resp = Machine.all(data, function(err,result){
        // console.log(result);
        //console.log(err);

        if(resp === 2){
            res.status(400).send('Query error!');
        }else{
            res.send(result);
        }

    });

}

exports.show = async (req, res) => {
    var data = req.params;

    const machineExists = await (Machine.checkMachine)(req.params.machineID);
    
    // if machine exists
    if (machineExists) {
        // console.log(req.params.machineID);
        // create a new user
        const resp = Machine.show(data, function(err,result){
            // console.log(result);
            //console.log(err);

            if(resp === 2){
                res.status(400).send('Query error!');
            }else{
                res.send(result);
            }

        });
        return;
    }else{
        // create a json response
        res.status(404).json({
            success: false,
            status: 404,
            message: "Machine does not exists"
        });

        return;
    }
    

}

exports.update = async (req, res) => {
    var data = req.body;

    const machineExists = await (Machine.checkMachine)(req.params.machineID);
    
    // if machine exists
    if (machineExists) {
        // console.log(req.body.failedShots);
        // create a new user
        const resp = Machine.update(data, function(err,result){
            // console.log(result);
            //console.log(err);

            if(resp === 2){
                res.status(400).send('Query error!');
            }else{
                res.send(result);
            }

        });

        return;
    }else{
        // create a json response
        res.status(404).json({
            success: false,
            status: 404,
            message: "Machine does not exists"
        });

        return;
    }
    
}

exports.delete = async (req, res) => {
    var data =  req.params;
    const machineExists = await (Machine.checkMachine)(req.params.machineID);
    
    // if machine exists
    if (machineExists) {
        console.log("Deleting Machine")
        
        const resp = Machine.delete(data, function(err,result){
            console.log(result);
            //console.log(err);

            if(resp === 2){
                res.status(400).send('Query error!');
            }else{
                res.status(201).send(result);
            }

    });

        return;
    }else{
        // create a json response
        res.status(404).json({
            success: false,
            status: 404,
            message: "Machine does not exists"
        });

        return;
    }

}