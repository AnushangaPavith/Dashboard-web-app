const Joi = require('@hapi/joi');

const machineCreateValidation = (machine) => {
    const schema = Joi.object({
        machineID: Joi.string().min(1).max(255).required(),
        moldID: Joi.string().min(1).max(255).required(),
        moldShots: Joi.number().min(0).max(255),
        failedShots: Joi.number().min(0).max(255),
        prodRate: Joi.number().min(0).max(255),
        prod_start_date: Joi.date(),
        prod_end_date: Joi.date(),
        monaNumber: Joi.string().min(1).max(255).required(),
        material: Joi.string().min(1).max(255).required(),
        moldMaker: Joi.string().min(1).max(255).required()
    });

    const { error } = schema.validate(machine);
    return error;
}

module.exports = {
    machineCreateValidation
}