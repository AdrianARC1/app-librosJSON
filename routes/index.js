const express = require('express');
const router = express.Router();

let libros = [
  {
    title: "Hola",
    autor: "Mi tia",
    imagen: "https://static.vecteezy.com/system/resources/previews/002/820/442/original/aa-logo-monogram-modern-design-template-free-vector.jpg",
    descrip: "Ninguna xd"
  },
  {
    title: "Hola",
    autor: "Mi tia",
    imagen: "https://static.vecteezy.com/system/resources/previews/002/820/442/original/aa-logo-monogram-modern-design-template-free-vector.jpg",
    descrip: "Ninguna xd"
  }

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
  res.render('books', { libros
    // titulo: libros.title,
    // autor: libros.autor,
    // imagen: libros.imagen,
    // descripcion: libros.descrip,
});
});

router.get('/add', function(req, res, next) {
  res.render('create', { title: 'Añadir libro' });
});

router.post('/books', function(req, res, next) {
  const { title, autor, imagen, descrip } = req.body

  if(!title || !autor || !imagen || !descrip){
    res.status(400).send("No te dejes nada vacío")
  }
  let nuevoLibro={
    title, autor, imagen, descrip
  }
  libros.push(nuevoLibro)
  console.log(libros)
  res.redirect("/books")
});
module.exports = router;
