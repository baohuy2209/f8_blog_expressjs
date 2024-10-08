const express = require("express");
const router = express.Router();
const controller = require("../controllers/posts.controller");
router.get("/", controller.index);
router.post("/", controller.store);
router.get("/:id", controller.show);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);
module.exports = router;
