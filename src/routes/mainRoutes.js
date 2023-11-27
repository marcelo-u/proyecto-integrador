const express = require("express");
const router = express.Router();
const mainControlers = require("../../controllers/mainControler");

router.get("/home", mainControlers.home);
router.get("/contact", mainControlers.contact);
router.get("/about", mainControlers.about);
router.get("/faqs", mainControlers.faqs);

module.exports = router;

