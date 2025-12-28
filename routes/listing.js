const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listings.js");
const {isLoggedIn, isOwner,validateListing} =require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require('../cloudConfig.js');
const upload = multer({storage})


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing));


router.get("/new",isLoggedIn,wrapAsync(listingController.renderNewForm));

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner, upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));


router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));

module.exports = router;
