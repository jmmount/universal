var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Universal English' });
});

/* Practice API Route */
router.get('/api/', function(req, res, next){
  let image = "<img src='/images/globe-outline.png'/>";
  res.send(image);
});

module.exports = router;
