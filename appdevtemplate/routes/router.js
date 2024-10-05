const express = require('express');
const router = express.Router();
const con = require('../controller/HpCotroller'); 
router.get('/', con.index);
router.get('/abouts', con.abouts);
router.get('/abouts/contacts', con.contacts);
router.get('/users', con.users);
router.get('/userdisplay', con.userdisplay);
router.get('/products', con.products);
router.get('/home', con.home)
router.get('/review', con.review)
router.get('/category', con.category)
router.get('/community', con.com)
router.get('/contact', con.contact)
module.exports = router;