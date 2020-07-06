const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");

// set aylien API credentials
let textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});

const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
/*
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
*/
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/analysis', function (req, res) {
    textapi.sentiment({
  		'url': req.body.urlToAn
	}, function(error, response) {
  		if (error === null) {
    		res.send(response);
  		} else {
  			console.log(error)
  		}
	});
})