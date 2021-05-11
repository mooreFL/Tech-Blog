  
const router = require('express').Router();
const { User } = require('../../models');

//=========post (all)=========
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        // email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //=========router post via login=========
  router.post('/login', async (req, res) => {
    try {
      console.log(req.body)
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      console.log(dbUserData);
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //=========router post (logout)=========
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  router.put('/blogpost', async (req, res) => {
    console.log('You are an idiot')
    try {
      const comment = await Comment.create( 
      {
        comment: req.body.comment,
      },
      {
        where: {
          post: req.session.post.id,
        }
      })
      res.status(200).json(comment)
    } catch (err) {
      
    }
  })
  
  module.exports = router;