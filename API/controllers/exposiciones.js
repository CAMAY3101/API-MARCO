const ExposService = require('../services/exposiciones');

module.exports = {
    addExpo: async (req, res, next) => {
        const { name, descripcion, fechaI, imagenes } = req.body;

        const newExpo = await ExposService.addExpo(name, descripcion, fechaI, imagenes)
        res.status(201).json({
            message: "Exposition added",
            newExpo,
            succes : true
        });
    },

    getExposicion: async (req, res, next) => {
        const expo = await ExposService.getExposicion(req.params.name);
        console.log(expo)
        if (expo) {
            res.status(200).json({expo});
        }else{
            res.status(404).json({"mesagge" : "NotFound"});
        }
    },
    getAllExpos: async(req, res, next) => {
        const expos = await ExposService.getAllExpos();
        res.status(200).json({expos});
    }
};