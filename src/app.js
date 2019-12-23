const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello World');
});


app.get('/next_page', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27,
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
