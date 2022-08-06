// import models
const initModel = require("../models/init.model");
const machineModel = require("../models/machine.model");
const moldModel = require("../models/mold.model");

// import validation
const { machineCreateValidation } = require("../validation/machineValidation");

exports.init = async (req, res) => {
    // attributes
    // set value to null if not provided
    const {
        machineID = null,
        moldID = null,
        moldShots = 0,
        failedShots = 0,
        prodRate = 0,
        prod_start_date = new Date().toISOString().split("T")[0],
        prod_end_date = new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
            ).toISOString().split("T")[0],
        monaNumber = null,
        material = null,
        moldMaker = null
    } = req.body;


    // validation
    const error  = machineCreateValidation(req.body);
    if (error) {
        // create a json response
        res.status(400).json({
            success: false,
            status: 400,
            message: error.details[0].message
        });
        return;
    }

    // check if machine exists 
    // wait for the promise to resolve
    const machineExists = await (machineModel.checkMachine)(machineID);
    
    // if machine exists
    if (machineExists) {
        // create a json response
        res.status(400).json({
            success: false,
            status: 400,
            message: "Machine already exists"
        });
        return;
    }
    
    // check if mold exists
    const moldExists = await (moldModel.checkMold)(moldID);
    if (!moldExists) {
        // create a mold
        const newMold = new moldModel({
            moldID,
            monaNumber,
            material,
            moldMaker
        });

        const createdMold = await (moldModel.create)(newMold);

        if (!createdMold) {
            // create a json response
            res.status(400).json({
                success: false,
                status: 400,
                message: "Error creating mold"
            });
            return;
        }
    }
    
    // create a new machine
    const newMachine = new machineModel({
        machineID,
        moldID,
        moldShots,
        failedShots,
        prodRate,
        prod_start_date,
        prod_end_date,
        monaNumber,
        material,
        moldMaker
    });
    const createdMachine = await (machineModel.create)(newMachine);

    if (!createdMachine) {
        // create a json response
        res.status(400).json({
            success: false,
            status: 400,
            message: "Error creating machine"
        });
        return;
    }

    // create a json response
    res.status(201).json({
        success: true,
        status: 201,
        message: "Machine and mold created successfully"
    });
    
    // return;

}