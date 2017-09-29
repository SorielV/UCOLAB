var express = require('express');
var router = express.Router();

/*
Index
 */ 

//Middleware 
router.use((req, res, next) => {
  console.log('Ingresa a Index');
  next();
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
