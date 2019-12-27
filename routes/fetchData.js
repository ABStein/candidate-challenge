const express = require('express');
const router = express.Router();
const fetchDataController = require('../controllers/fetchData');

// fetch data route
router.get(
    '/',
    (req, res) => fetchDataController.fetchData(req, res),
);


module.exports = router;