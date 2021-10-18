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
    }
};