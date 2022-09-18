var express = require('express');
var router = express.Router();
const {getAll,postData,getDataById,editById,deleteById} = require('../controller/todolistController')
/* GET home page. */
router.get('/api/todo-items',getAll)
router.get('/api/todo-items/:id',getDataById)
router.post('/api/todo-items', postData)
router.put('/api/todo-items/:id',editById)
router.delete('/api/todo-items/:id',deleteById)

module.exports = router;
