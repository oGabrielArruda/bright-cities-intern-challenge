const Todo = require('../models/Todo');

module.exports = {
    async index(req, res) {
        let whereStatement = {};

        if(req.params.id)
            whereStatement.id = req.params.id;            
        if(req.query.completed)
            whereStatement.completed = req.query.completed;

        const todo = await Todo.findAll({
            where: whereStatement,
        });

        return res.json(todo);
    },

    async store(req, res) {
        const { descricao, completed } = req.body;

        const todo = await Todo.create({ descricao, completed });

        return res.json(todo);
    },

    
    async edit(req, res) {
        const { descricao, completed} = req.body;

        const todo_exists = await Todo.findByPk(req.params.id);

        if(!todo_exists)
            return res.status(404).send({ message: "Todo not found!"});

        const updated = await todo_exists.update({ descricao, completed });
        return res.json(updated);
    },

    async remove(req, res) {
        const todo_id = req.params.id;
        const todo_exists = await Todo.findByPk(todo_id);

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