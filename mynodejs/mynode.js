const express = require('express');
const mypath = require('path');
const userRoutes = require('./myroutes/products');// galing route folder to user.js
const nodeapp = express();

nodeapp.set('view engine', 'ejs');
nodeapp.set('views', mypath.join(__dirname, 'views'));
nodeapp.use(express.urlencoded({ extended: true }));

nodeapp.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
nodeapp.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});
nodeapp.use('/products', userRoutes);

//ano port ang gagamitin
const useport = 8080;
nodeapp.listen(useport, () => {
  console.log(`Server running at http://localhost:${useport}`);
});