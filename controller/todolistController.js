const v = require('fastest-validator');
const check = new v()
const {
    Todolist
} = require('../models/index');

const getAll = async function(req, res) {
    const getAll = await Todolist.findAll();
    if (getAll.length == 0) {
        res.json({
            status: 400,
            message: `nothing data in here`,
            data: getAll
        })
    }
    return res.json({
        total: getAll.length,
        data: getAll
    })

}

const getDataById = async (req, res) => {
    const find = await Todolist.findByPk(req.params.id);
    !find ? res.json({
        name: `not found`,
        message: `no record found for id '${req.params.id}'`
    }) : res.json({
        data: find
    })
}

const postData = function(req, res) {
    const {
        title,
        body
    } = req.body

    Todolist.create({
        title: title,
        body: body
    }).then(data => data ? res.status(200).json({
        data
    }) : res.status(200).json({
        data
    }))
}

const editById = async function(req, res) {
    const id = req.params.id
    await Todolist.update(req.body, {
            where: {
                id: id
            }
        })
        .then(data => data == 1 ? res.json({
            message: `succes update`
        }) : res.json({
            message: `succes update`
        }))

}


const deleteById = async function(req, res) {
    const id = req.params.id
    await Todolist.destroy({
            where: {
                id: id
            }
        })
        .then(data => data ? res.json({
            message: `delete succes`
        }) : res.json({
            message: `nothing data with id ${id}`
        }))
}

module.exports = {
    getAll,
    postData,
    getDataById,
    editById,
    deleteById
}