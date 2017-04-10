// DEPENDENCIES
const express = require('express');
const app = express();
const router = express.Router();

// LIB
const readArchive = require('../lib/readArchive');

router.get('/', (req, res) => {
  res.send('flights route');
});

router.get('/allinfo/:type/:value1/:value2', (req, res) => {
  readArchive(req.params.type, req.params.value1, req.params.value2, (results) => {
    res.send(results);
  });
});


module.exports = router;