const express = require('express');
const cors = require('cors');
const statusCodes = require('http-status-codes');
const fetchDataRouter = require('./routes/fetchData');

const app = express();

//Middlewares

// Middleware that enables all CORS requests
app.use(cors())

// fetch-data router
app.use('/candidate', fetchDataRouter);

// 404 error handler
app.use((req, res) => {
    res.status(statusCodes.NOT_FOUND).json({
    code: statusCodes.NOT_FOUND,
    message: 'The requested resource does not exist',
    });
});

// for developement
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
