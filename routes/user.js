const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const path = require("path");
const flash = require("connect-flash");
const { isLoggedIn } = require("../middelware.js");



//signup
router.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

router.post("/signup", async (req, res, next) => {
  try {
    let { username, email, mobile, location, password } = req.body;
    const newUser = new User({ username, email, mobile, location, password });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "You Are Registerd Successfully");
      res.redirect("/index");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/index");
  }
});

router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome To TazZA");
    res.redirect("/index");
  }
);


router.get("/logout",   (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You Are Logged Out Successfully!!");
    res.redirect("/index");
  });
});

module.exports = router;
