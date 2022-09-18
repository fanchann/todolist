const {body} = require('express-validator')

exports.valid = [
    body('title').notEmpty(),
    body('body').notEmpty()
]