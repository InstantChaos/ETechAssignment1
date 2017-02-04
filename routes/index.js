let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

//get about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

//get projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

//get service page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

//get contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
