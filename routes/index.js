const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

// router.get('/', (res, req) => {
//     req.send("Welcome!")
// })

module.exports = router;