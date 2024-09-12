var express = require('express');
var router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Universal English' });
});

/* Practice API Routes */
router.get('/api/', function(req, res, next){
  let image = "<img src='/images/globe-outline.png'/>";
  res.send(image);
});

// Route to serve JSON practice data
router.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});




module.exports = router;
