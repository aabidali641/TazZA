const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const path = require("path");
const flash = require("connect-flash");

// Home Route
router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

router.get("/index", (req, res) => {
  res.render("pages/index.ejs");
});

router.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

router.get("/product", (req, res) => {
  res.render("pages/product.ejs");
});

router.get("/gallery", (req, res) => {
  res.render("pages/gallery.ejs");
});

router.get("/contect", (req, res) => {
  res.render("pages/contect.ejs");
});

router.get("/cart", (req, res) => {
  res.render("pages/cart.ejs");
});


module.exports = router;