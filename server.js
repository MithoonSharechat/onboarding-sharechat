var express = require('express');
var app = express();
const port = 3000;
app.listen(port);
app.get('/', (req, res) => {res.send("Hello World")});
