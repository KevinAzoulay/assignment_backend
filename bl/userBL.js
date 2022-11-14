const mongoose = require('mongoose');
const User = require("../models/userModel")

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({mentor : false}, (err, data) => {
      if (err) {
        reject(err);
      } else {  
        resolve(data);
      }
    });
  });
};

const getUser = (id) => {
    return new Promise ((resolve, reject)=> {
        User.findById(id,{},(err,data)=>{
            if (err) {
                reject (err)
            }
            else{
                resolve (data)
            }
        })
    })
}

module.exports = { getAllUsers, getUser };