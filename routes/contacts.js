const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');

// Get Routes to return data
router.get('/', contactController.getAllContactData);
router.get('/:id', contactController.getSingleContact);

// Routes to add data 
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact)

// // Delete Routes to delete specific ID
router.delete('/:id', contactController.deleteContact);


module.exports = router;