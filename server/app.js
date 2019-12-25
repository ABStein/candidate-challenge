const express = require('express');
const cors = require('cors')
const fetchDataRouter = require('./routes/fetchData');

const app = express();

//Middlewares

// Middleware that allows cors requests to anyone and prevent cors errors
app.use(cors())

// fetch-data router
app.use('/candidate_challenge', fetchDataRouter);

// for developement
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
