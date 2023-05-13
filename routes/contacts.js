const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');

router.get('/contacts', contactController.getAllContactData);
router.get('/:id', contactController.getSingleContact);

module.exports = router;