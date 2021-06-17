const Status = require('../models/Status');

module.exports = {
    async index(req, res) {
        let whereStatement = {};

        if(req.params.id)
            whereStatement.id = req.params.id;

        const status = await Status.findAll({
            where: whereStatement,
        });
        console.log(status);
        return res.json(status);
    },

    async store(req, res) {
        const { descricao } = req.body;

        const status = await Status.create({ descricao });

        return res.json(status);
    },

    
    async edit(req, res) {
        const { descricao } = req.body;

        const status_exists = await Status.findByPk(req.params.id);

        if(!status_exists)
            return res.status(404).send({ message: "Status not found!"});

        const updated = await status_exists.update({ descricao });
        return res.json(updated);
    },

    async remove(req, res) {
        const status_id = req.params.id;
        const status_exists = await Status.findByPk(status_id);

        if(!status_exists)
            return res.status(404).send({ message: "Status not found!"});

        await Status.destroy({
            where: {
                id: status_id,
            }
        })
        return res.json({ message: "Status successfully deleted!"});
    }
}