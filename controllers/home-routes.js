  
const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

//=========router (get all)=========
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [User],
          });
          const blogs = blogData.map((blog) => blog.get({ plain: true }));
          console.log(blogs);
        res.render('home', {
            blogs
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// =========router (get) blogs for dashboard=========
//change to reflect list of blog posts
router.get('/dashboard', async (req, res) => {
  try {
      const blogData = await Blog.findAll({
          include: [User],
      });
      const blogs = blogData.map((blog) => blog.get({ plain: true}));
      console.log(blogs);
      //render to blogpost handlebars
     res.render('blogpost', {
         blogs,
     }); 
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

//=========router get blogpost by id=========
router.get('/blogpost/:id', async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id);
    console.log("It's a trap!")
    console.log(dbPostData);
    const singlePost = dbPostData.get({ plain: true });
    console.log({ singlePost, loggedIn: req.session.loggedIn})
    res.render('blogpost', { ...singlePost, loggedIn: req.session.loggedIn})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//fix updating the comment 
  router.put('/comment', async (req, res) => {
    console.log('You are an idiot')
    try {
      console.log(req.body);
      console.log("Will you still need me, will you still feed me, when I'm 64?")
      const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
      })
      res.status(200).json(comment)
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

//=========router (get) login =========
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  

module.exports = router