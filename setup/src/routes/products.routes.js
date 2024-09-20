const express = require("express");
const router = express.Router();
const controller = require("../controllers/products.controller");

router.get("/", controller.index);
router.post("/", controller.store);
router.get("/sync-from-kiotviet", controller.syncFromKiotViet);
router.get("/:id", controller.show);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);
module.exports = router;
