const { request } = require('express');
const VguiaService = require('../services/vguiadas');

module.exports = {
    addVisita: async (req, res, next) => {
        const { reservador, Nguia, fecha, hora, Npersonas, disponible } = req.body;

        const newVisita = await VguiaService.addVisita(reservador, Nguia, fecha, hora, Npersonas, disponible)
        res.status(201).json({
            message: "Visista guiada added",
            newVisita,
            succes: true
        });
    },

    getVisita: async (req, res, next) => {
        const visit = await VguiaService.getVisita(req.params.Nguia);
        console.log(visit)
        if (visit) {
            res.status(200).json({ visit });
        } else {
            res.status(404).json({ "mesagge": "NotFound" });
        }
    },
    getAllVis: async (req, res, next) => {
        const visits = await VguiaService.getAllVis();
        res.status(200).json({ visits });
    },

    getHorarios: async (req, res, next) => {
        const horarios = await VguiaService.getHorarios(req.params.fecha);
        console.log(horarios)
        if (horarios) {
            res.status(200).json({ horarios });
        } else {
            res.status(404).json({ "mesagge": "NotFound" });
        }
    },
    getGuias: async (req, res, next) => {
        const fecha = req.params.fecha;
        const hora = req.params.hora;
        const guias = await VguiaService.getGuias(fecha, hora)
        console.log(fecha + hora)
        if (guias) {
            res.status(200).json({ guias });
        } else {
            res.status(404).json({ "mesagge": "NotFound" });
        }
    },

    getVreservadas: async (req, res, next) => {
        const Rguias = await VguiaService.getVreservadas();
        res.status(200).json({ Rguias });
    },

    getVdisponibles: async (req, res, next) => {
        const RNguias = await VguiaService.getVdisponibles();
        res.status(200).json({ RNguias });
    },

    getNumDis: async (req, res, next) => {
        const Ndis = await VguiaService.getNumDis();
        res.status(200).json({ Ndis });
    },

    getNumRes: async (req, res, next) => {
        const Nres = await VguiaService.getNumRes();
        res.status(200).json({ Nres });
    },

    updateVisit: async (req, res, next) => {
        //fecha, Nguia, hora ,reservador, Npersonas
        const reservador = req.params.reservador;
        const Nguia = req.params.Nguia;
        const fecha = req.params.fecha;
        const hora = req.params.hora;
        const Npersonas = req.params.Npersonas;

        const updateVisit = await VguiaService.updateVisit(reservador, Nguia, fecha, hora, Npersonas)

        res.status(201).json({
            message: "Visita Updated",
            updateVisit
        });
    }
};