const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
  res.render('books', { title: 'Libros' });
});

router.get('/add', function(req, res, next) {
  res.render('create', { title: 'Añadir libro' });
});

module.exports = router;
