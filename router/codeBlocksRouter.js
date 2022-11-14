const express = require("express");
const codeBlocksBL = require("../bl/codeBlocksBL");
const router = express.Router();
const passport = require("passport");

router.get(
  "/codelist",
  // passport.authenticate("jwt", { session: false }),
  async (req, resp) => {
    try {
      const codeBlocks = await codeBlocksBL.getAllCodeBlocks();
      return resp.json(codeBlocks);
      console.log(codeBlocks);
    } catch (error) {
      console.log(1 + error);
    }
  }
);

router.get(
  "/codelist/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, resp) => {
    try {
      const { id } = req.params;
      const codeBlock = await codeBlocksBL.getCodeBlocks(id);
      return resp.json(codeBlock);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
