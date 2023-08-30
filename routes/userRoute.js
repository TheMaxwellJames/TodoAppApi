const express = require('express');
const { postTodo, updateTodo, deleteTodo, getTodo } = require('../controllers/todoController');
//const getUserData = require('../controllers/userController');
const router = express.Router();





// router.get('/', getUserData);
router.post('/posttodo/:todo', postTodo);
router.put('/updatetodo/:id/:updatedtodo', updateTodo);
router.delete('/tododelete/:id',deleteTodo);
router.get('/gettodo',getTodo)







module.exports = router;
