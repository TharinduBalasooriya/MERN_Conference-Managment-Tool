const express =  require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User =  require('../models/user.model')

exports.signUP = function (req, res) {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      usertype:req.body.usertype
    });
  
    user.save(err=>{
      if(err){
        res.status(500).send({ message: err });
        return;
  
      }
      res.send({ message: "Admin Daschboard Access Profile Created Successfully" });
    })
    
  
  };


/**
 * This Function returns JWT access Token
 * @param {
 * } req 
 * @param {*} res 
 */
  exports.signIn = function (req, res) {
    User.findOne({
      username: req.body.username,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
  
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
  
      var token = jwt.sign({ id: user.id }, "key", {
        expiresIn: 86400, // 24 hours
      });
  
      res.status(200).send({
        id: user._id,
        username: user.username,
        usertype: user.usertype,
        accessToken: token,
      });
    });
  };