const {
    Todolist
} = require('../models/index');
const {validationResult} = require('express-validator')


const todoPost = async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).json({message:'error'})
    }
    const {title,body} = req.body
    Todolist.create({title:title,body:body})
    .then((data) => {
        res.status(200).json({message:"success",data:data})
    }).catch((err) => {
        
    });
}
module.exports = todoPost