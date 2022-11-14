const express = require("express");

const userBL = require("../bl/userBL");
const authBL = require("../bl/authBL");
const router = express.Router();
const passport = require("passport");

router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  async (req, resp) => {
    try {
      const users = await userBL.getAllUsers();

      return resp.json(users);
    } catch (error) {
      console.log(error);
    }
  }
);

router.get(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, resp) => {
    try {
      const { id } = req.params;
      let user = await userBL.getUser(id);
      return resp.json(user);
    } catch (error) {
      console.log(error);
    }
  }
);

router.post("/login", async (req, res) => {
  let data = await authBL.userLogin(req.body);
  return res.json(data);
});

module.exports = router;
