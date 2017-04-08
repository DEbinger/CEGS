const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {
  extended : true
}));

app.use('/', (req, res) => {
  res.send('testing');
});

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});