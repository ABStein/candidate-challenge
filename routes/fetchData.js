const express = require('express');
const router = express.Router();
const fetchDataController = require('../controllers/fetchData');

// fetch data route
router.get(
    '/fetch-data',
    async (req, res) => fetchDataController.fetchData(req, res),
);


module.exports = router;


// (req, res) => fetchDataController.fetchData(req, res),