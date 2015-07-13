var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());


var contacts = [{
  'name': 'Shotaro Kaneda',
  'age': 16,
  'occupation': 'Futuristic Biker Gang Captain',
  'email': 'kaneda@capsules.co.jp'
}, {
  'name': 'Jon Snow',
  'age': 15,
  'occupation': 'Lord Commander of the Wall',
  'email': 'jon@nightswatch.wl'
}, {
  'name': 'Lara Croft',
  'age': 22,
  'occupation': 'Tomb Raider',
  'email': 'lara@croft.co.uk'
}];

app.get('/contacts', function (req, res) {
  res.status(200).json(contacts);
});

app.listen(9001, function () {
  console.log('Listening port 9001 ...');
});