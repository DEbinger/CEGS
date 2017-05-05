const express = require('express');
const router = express.Router();

router.post('/saveItinerary', (req, res) => {
  console.log('itinerary route hit');
  res.send('itinerary route hit');
});

module.exports = router;