const mongoose = require('mongoose');
const CapModel = require('../models/capsula');

const addCap = async (artista, resumen, avatar) => {
    const capmodel = new CapModel({
        artista : artista,
        resumen : resumen,
        avatar : avatar
    });

    const newCap = await capmodel.save();
    return newCap;
};

const getCapsula = async (artista) => {
    const cap = await CapModel.findOne({ artista });
    return cap;
};

const getAllCaps = async () => {
    const caps = await CapModel.find({});
    return caps;
};
module.exports = {
    addCap,
    getCapsula,
    getAllCaps
}