const express = require("express");
const router = new express.Router();
const cors = require("cors");
// const authorizate = require("./../middleware/authorization");
const userController = require('../controllers/user')
router.use(cors());
router.use(express.json());

router.get("/startServer", userController.startServer );
router.post("/sendEmail", userController.sendEmail );


module.exports = router;
