const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAllContactData = async(req, res, next) => {
    const result = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .find();

    result.toArray().then((lists) => {
        res.status(200).json(lists);
    });
};

const getSingleContact = async(req, res, next) => {
    const result = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .findOne({_id: new ObjectId(req.params.id) });


    res.send(result).status(200);
    if (!result) {
        // return res.sendStatus(404);
        console.log("no result")
    }

    
};
    

module.exports = { getAllContactData, getSingleContact, }