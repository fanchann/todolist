var express = require('express');
var router = express.Router();
const {getAll,postData,getDataById,editById,deleteById} = require('../controller/todolistController');
const todoPost = require('../controller/todolist.post');
const bodyValidate = require('../controller/body.validate')
/* GET home page. */
router.get('/api/todo-items',getAll)
router.get('/api/todo-items/:id',getDataById)
router.post('/api/todo-items',bodyValidate.valid,todoPost)
router.put('/api/todo-items/:id',editById)
router.delete('/api/todo-items/:id',deleteById)

module.exports = router;
