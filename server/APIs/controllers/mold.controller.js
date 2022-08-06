// import user model
const Mold = require('../models/mold.model');
const Machine = require('../models/machine.model');

const dotenv = require('dotenv');

exports.all = async (req, res) => {
    var data = req.body;

    // create a new user
    const resp = Mold.all(data, function(err,result){
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


    const moldExists = await (Mold.checkMold)(req.params.moldID);
    
    // if mold exists
    if (moldExists) {
        // console.log(req.params.machineID);
        // create a new user
        const resp =Mold.show(data, function(err,result){
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
            message: "Mold does not exists"
        });

        return;
    }
    
}

exports.update = async (req, res) => {
    var data = req.body;

    const moldExists = await (Mold.checkMachine)(req.params.moldID);
    
    // if machine exists
    if (moldExists) {
        // console.log(req.body.failedShots);
        // create a new user
        const resp = Mold.update(data, function(err,result){
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
            message: "Mold does not exists"
        });

        return;
    }
    
}

exports.delete = async (req, res) => {
    var data =  req.params;

    // check whether mold exists in the machines table
    const moldExists_Machine = await (Machine.checkMold)(req.params.moldID);

    if (moldExists_Machine) {
        res.status(400).json({
            success: false,
            status: 400,
            message: "Mold is in use"
        });
        return;
    }

    const moldExists = await (Mold.checkMold)(req.params.moldID);
    
    // if mold exists
    if (moldExists) {
        console.log("Deleting Mold")
        
        const resp = Mold.delete(data, function(err,result){
            console.log(result);
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
            message: "Mold does not exist"
        });

        return;
    }
    

}