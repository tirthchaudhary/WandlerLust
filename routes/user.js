const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utils/wrapasync.js");
const passport = require("passport");
const LocalStrategy=require("passport-local");
const {saveRedirectUrl}=require('../middleware.js')
const userController=require("../controllers/user.js");
const { useReducer } = require("react");

router.route("/signup")
.get(wrapAsync(userController.renderSignupForm))
.post(wrapAsync(userController.signUp));


router.route("/login")
.get(wrapAsync(userController.renderLoginForm))
.post ( saveRedirectUrl,
    passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.login)
 )


router.get("/logout",wrapAsync(userController.logout)) 

module.exports=router;
