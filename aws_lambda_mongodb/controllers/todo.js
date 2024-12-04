const Todo = require("../models/todo");

const addTodo = async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error: "Missing required field" });
    }
    try {
        const todo = new Todo({
            content,
        });
        await todo.save();
        res.status(201).json({ message: "Todo created successfully!", todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Could not create todo", message: error.message });
    }
};
// http://localhost:3000/dev/api/todo


const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Could not fetch todos" });
    }
};
// http://localhost:3000/dev/api/todos

module.exports = {
    addTodo,
    getTodo
};
