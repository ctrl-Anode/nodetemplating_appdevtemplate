const con = {
    index:(req, res)=>{
        res.render('index');   
    },
    abouts:(req, res)=>{
        res.render('abouts');
    },
    contacts:(req, res)=>{
        res.render('contacts');
    },
    users:(req, res)=>{
        res.render('users');
    },
    userdisplay:(req, res)=>{
        res.render('userdisplay');
    },
    products:(req, res)=>{
        res.render('products');
    },
    home:(req, res)=>{
        res.render('home');
    },
    review:(req, res)=>{
        res.render('review');
    },
    category:(req, res)=>{
        res.render('category');
    },
    com:(req, res)=>{
        res.render('community');
    },
    contact:(req, res)=>{
        res.render('contact');
    }
};
module.exports = con;