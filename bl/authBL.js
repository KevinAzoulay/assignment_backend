const utils = require("../lib/utils");
const express = require("express");
const UsersBL = require("../bl/userBL");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const passport = require("passport");

const userLogin = (loginObj) => {
  return new Promise((resolve, reject) => {
    User.findOne({ Username: loginObj.username }, (err, user) => {
      if (err) {
        reject(err, console.log(err + "User not found"));
      } else {
        let password = toString(loginObj.password);
        console.log("user>>", user);
        let hash = user.hash;
        let salt = user.salt;
        const isValid = utils.validPassword(password, hash, salt);
        if (isValid) {
          const tokenObject = utils.issueJWT(user);
          resolve(
            {
              success: true,
              user: user,
              token: tokenObject.token,
              expiresIn: tokenObject.expires,
            },
            console.log(hash, salt)
          );
        } else {
          resolve({
            success: false,
            msg: "you have entered the wrong password",
          });
        }
      }
    });
  });
};

module.exports = { userLogin };
