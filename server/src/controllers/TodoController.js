const Todo = require('../models/Todo');
const Status = require('../models/Status');

module.exports = {
    async index(req, res) {
        let whereStatement = {};

        if(req.params.id)
            whereStatement.id = req.params.id;            
        if(req.query.status_id)
            whereStatement.status_id = req.query.status_id;

        const todo = await Todo.findAll({
            where: whereStatement,
        });

        return res.json(todo);
    },

    async store(req, res) {
        const { descricao } = req.body;

        const todo = await Todo.create({ descricao, status_id: 1});

        return res.json(todo);
    },

    
    async edit(req, res) {
        const { descricao, status_id } = req.body;

        const todo_exists = await Todo.findByPk(req.params.id);

        if(!todo_exists)
            return res.status(404).send({ message: "Todo not found!"});

        const status_exists = await Status.findByPk(status_id);

        if(!status_exists)
            return res.status(404).send({ message: "Todo status invalid!"})

        const updated = await todo_exists.update({ descricao, status_id });
        return res.json(updated);
    },

    async remove(req, res) {
        const todo_id = req.params.id;
        const todo_exists = await Status.findByPk(todo_id);

        if(!todo_exists)
            return res.status(404).send({ message: "Todo not found!"});

        await Todo.destroy({
            where: {
                id: todo_id,
            }
        })
        return res.json({ message: "Todo successfully deleted!"});
    }
}