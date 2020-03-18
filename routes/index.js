var express = require('express');
var router = express.Router();
// Require controllers.
var homeCtrler = require('../controllers/HomeCtrler');
/* GET home page. */
router.get('/', homeCtrler.show); 

/* GET product detail page */
router.get('/product/:id', homeCtrler.productDetail);

/* GET shop page showing products by category */
router.get('/shop', homeCtrler.shopShow);

/* GET error page */
router.get('/error', function(req, res, next) {
	res.render('error', { title: 'Toys Shop' });
});

router.get('/single', function(req, res, next) {
	res.render('single', { title: 'Express' });
  });
module.exports = router;
