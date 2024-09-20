const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const controller = require("../controllers/auth.controller");
const authRequired = require("../helpers/authRequired");
router.post(
  "/register",
  body("name").isLength({ min: 2 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  controller.register
);
router.post("/login", controller.login);
router.get("/current-user", authRequired, controller.currentUser);

module.exports = router;
