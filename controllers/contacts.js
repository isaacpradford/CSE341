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
        console.log("no result")
    }

    
};

const createContact = async (req, res) => {

    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  };

  const updateContact = async (req, res) => {
    // be aware of updateOne if you only want to update specific fields
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDb()
      .db('cse341')
      .collection('contacts')
      .replaceOne({ _id: new ObjectId(req.params.id)  }, contact);

    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  };

  const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const response = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .remove({ _id: userId }, true);

    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
  };
    

module.exports = { getAllContactData, getSingleContact, createContact, updateContact, deleteContact}