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

const getHorarios = async (fecha) => {
    const horarios = await VisitaModel.find({ fecha: fecha }).select("hora");
    return horarios;
};

const getGuias = async (fecha, hora) => {
    console.log(fecha + hora)
    const nguias = await VisitaModel.find({ fecha: fecha, hora: hora }).select("Nguia");
    return nguias;
}

const updateVisit = async (reservador, Nguia, fecha, hora, Npersonas) => {
    try {
        const filter = {Nguia: Nguia, fecha: fecha, hora: hora}
        const update = {reservador: reservador, Npersonas: Npersonas, disponible:false}
        const vguiada = await VisitaModel.findOneAndUpdate(filter, update);
        console.log(filter)
        console.log(update)
        await vguiada.save()

        console.log(vguiada)

        return vguiada;

    } catch (err) {
        return false
    }
}

module.exports = {
    addVisita,
    getVisita,
    getAllVis,
    getHorarios,
    getGuias,
    updateVisit
}