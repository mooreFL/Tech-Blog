const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

//=========router (get)=========
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [User],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true}));
        console.log(blogs);
       res.render('home', {
           blogs
       }); 
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//==========get blogpost by id=========
//is the below correct?? Ask tutor
router.get('/blogpost/:id', async (req, res) => {
    try {
       const dbPostData = await Blog.findByPk(req.params.id);
       console.log("oof")
       console.log(dbPostData);
       const singlePost = dbPostData.get({ plain: true });
       res.render('blogpost', { singlePost, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// =========router get (login)=========
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router