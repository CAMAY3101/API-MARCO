const mongoose = require('mongoose');
const ExpoModel = require('../models/exposicion');

const addExpo = async (name, descripcion, fechaI, imagenes) => {
    const expomodel = new ExpoModel({
        name : name, 
        descripcion : descripcion,
        fechaI : fechaI,
        imagenes : imagenes
    });

    const newExpo = await expomodel.save();
    return newExpo;
};

const getExposicion = async (name) => {
    const expo = await ExpoModel.findOne({ name });
    return expo;
};

const getAllExpos = async () => {
    const expos = await ExpoModel.find({});
    return expos;
};
module.exports = { 
    addExpo,
    getExposicion,
    getAllExpos
}