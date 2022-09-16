var express = require('express');
var router = express.Router();
const {getAll,postData,getDataById,editById,deleteById} = require('../controller/todolistController')
/* GET home page. */
router.get('/todo-items',getAll)
router.get('/todo-items/:id',getDataById)
router.post('/todo-items', postData)
router.put('/todo-items/:id',editById)
router.delete('/todo-items/:id',deleteById)

module.exports = router;
