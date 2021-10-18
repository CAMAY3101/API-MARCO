const mongoose = require('mongoose');
const VisitaModel = require('../models/vguiada.js')

const addVisita = async (reservador, Nguia, fecha, hora, Npersonas, disponible) => {
    const visitamodel = new VisitaModel({
        reservador: reservador,
        Nguia: Nguia,
        fecha: fecha,
        hora: hora,
        Npersonas: Npersonas,
        disponible: disponible
    })

    const newVisita = await visitamodel.save();

    return newVisita;
}

const getVisita = async (Nguia) => {
    const visita = await VisitaModel.findOne({ Nguia });
    return visita;
};

const getAllVis = async () => {
    const visitas = await VisitaModel.find({});
    return visitas;
}

module.exports = {
    addVisita,
    getVisita,
    getAllVis
}