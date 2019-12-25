const express = require('express');
const cors = require('cors')
const fetchDataRouter = require('./routes/fetchData');

const app = express();

//Middlewares

// Middleware that enables all CORS requests
app.use(cors())

// fetch-data router
app.use('/candidate', fetchDataRouter);

// for developement
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
