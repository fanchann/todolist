var express = require('express');
var router = express.Router();
const {todolist} = require('../models/index')
/* GET home page. */
router.post('/activity-groups', async function(req, res, next) {
  try {
    const {title,body} = req.body

    todolist.create({
      title:title,
      body:body
    })
    return res.json('ok')

  } catch (error) {
    res.send('eror blok')
  }
});

module.exports = router;
