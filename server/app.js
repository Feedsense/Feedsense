const express = require('express')
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../public'));


const port = 3001;

app.listen(port, () => {
  console.log('Success! Server Initialized');
})