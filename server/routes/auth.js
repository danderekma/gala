const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "https://www.google.com/" }),
  (req, res) => {
    res.redirect("https://www.google.com/");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("https://www.google.com/");
});

module.exports = router;
