const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');

router.get('/', contactController.getAllContactData);
router.get('/:id', contactController.getSingleContact);

module.exports = router;