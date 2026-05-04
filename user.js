const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();

// Register
router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect("/login");
});

// Login
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login",
    passport.authenticate("local", {
        successRedirect: "/recipes",
        failureRedirect: "/login"
    })
);

// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/login");
    });
});

module.exports = router;