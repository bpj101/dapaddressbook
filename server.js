var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());


var contacts = [{
  name: "Dennis"
}, {
  name: "Frank"
}];

app.get('/contacts', function (req, res) {
  res.status(200).json(contacts);
});

app.listen(9001, function () {
  console.log('Listening port 9001 ...');
});