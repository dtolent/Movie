const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const bcrypt = require('bcrypt');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/register', (req,res) => {

  bcrypt.hash(req.body.password,10)
  .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
      .then(result => {
        res.status(201).json({
          message: 'User created!',
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
    });

});

router.post('/login',(req,res) => {
  let currentUser;
  User.findOne({ email: req.body.email }).then(user => {

      if(!user) {
        console.log(user);
        return res.status(401).json({
          message: 'Authentication failed'
        });
      }
      currentUser = user;
      //Compare password input to that stored in the database
      return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
    if(!currentUser) {
      return res.status(401).json({
        message: 'Authentication failed'
      });
    }
    //Create token
    const token = jwt.sign(
      { email:currentUser.email,userId: currentUser._id },
      "Walang_sikretong_hindi_nabubunyag_kahit_itaga_mo_pa_sa_bato_ok",
      { expiresIn: '1h' }
    );
    res.status(200).json({
      token: token
    });
  })
  .catch(err => {
    if(!currentUser) {
      return res.status(401).json({
        message: 'Authentication failed'
      });
    }
  })
});

module.exports = router;
