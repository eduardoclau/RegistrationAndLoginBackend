const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.get('/', authController, (req, res) => {

    res.send('Esse dado deve ser visto apenas pelo Admin');


});

module.exports = router;