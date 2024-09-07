const express = require('express');
const myrout = express.Router();
let myproduct = [];

myrout.get('/add', (req, res) => {
  res.render('form', { title: 'Add Products' });
});

myrout.post('/add', (req, res) => {
  const newproduct = {
    name: req.body.name,
    desc: req.body.desc,
    quantity: req.body.quantity,
    price: req.body.price,
    cat: req.body.cat,
    uat: req.body.uat
  };
  if (newproduct.name) {
    myproduct.push(newproduct);
    res.redirect('/products/list');
  } else {
    res.send('Please enter a Product Data!');
  }
});

myrout.get('/list', (req, res) => {
  res.render('list', { title: 'Product List', myproduct });
});

myrout.get('/delete/:name', (req, res) => {
  const dataToDelete = req.params.name;
  myproduct = myproduct.filter(product => product.name !== dataToDelete);
  res.redirect('/products/list');
});

module.exports = myrout;
