const express = require("express");
const router = express.Router();
const { 
   addTodo,
    getTodo 
} = require("../controllers/todo");

router.post('/todo', addTodo);
router.get('/todos', getTodo);

module.exports = router;