const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

router.get("/", adminControllers.adminGET);
router.get("/create", adminControllers.createGET);
router.get("/edit/:id", adminControllers.editGET);

router.post("/create", adminControllers.createPOST);
router.put("/edit/:id", adminControllers.editPUT);
router.delete("/delete/:id", adminControllers.editDELETE);

module.exports = router;