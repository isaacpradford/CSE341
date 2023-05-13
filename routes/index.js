const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
    req.send("Welcome!")
})

router.get('/contacts', require('./contacts'));

module.exports = router;