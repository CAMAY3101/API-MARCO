const CapsService = require('../services/capsulas');

module.exports = {
    addCap: async (req, res, next) => {
        const { artista, resumen, avatar } = req.body;
        const newCap = await CapsService.addCap(artista, resumen, avatar)
        res.status(201).json({
            message: "Capsula added",
            newCap,
            succes: true
        });
    },
    getCapsula: async (req, res, next) => {
        const cap = await CapsService.getCapsula(req.params.artista);
        console.log(cap)
        if (cap) {
            res.status(200).json({ cap });
        } else {
            res.status(404).json({ "mesagge": "NotFound" });
        }
    },
    getAllCaps: async (req, res, next) => {
        const caps = await CapsService.getAllCaps();
        res.status(200).json({ caps });
    }
}