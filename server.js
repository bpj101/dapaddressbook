var express = require('express');
var app = express();

var contacts = [{
  name: "Dennis"
}, {
  mame: "Frank"
}];

app.get('/contacts', function (req, res) {
  res.status(200).json(contacts);
});

app.listen(9001, function () {
  console.log('Listening port 9001 ...');
});