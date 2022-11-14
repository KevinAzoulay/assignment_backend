const session = require("../models/session")

const addSession = (newSession) => {
    return new Promise((resolve, reject) => {
      let Session = new session(newSession);
  
      Session.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Session Created");
        }
      });
    });
  };
  module.exports = { addSession };
