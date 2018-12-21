const express = require('express');
const bodyParser = require('body-parser');
//const api = require('./app/routes')
const matrix = require('./matrix')

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to restfull api."});
});

app.post('/matrix', matrix.setup);
    

//app.use('/api', api)

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});