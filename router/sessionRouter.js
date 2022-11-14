const express = require("express");
const userBL = require("../bl/userBL");
const authBL = require("../bl/authBL")
const router = express.Router();
const passport = require("passport");

router.post("/newSession",
passport.authenticate("jwt", { session: false }),
async (req, resp) => {
  try {
    const newSession = req.body;
    const status = await sessionBL.addSession(newSession);
    return resp.json(status);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router