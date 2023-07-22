const express = require("express");
const router = express.Router();

const newController = require("../app/controllers/MController");

router.use("/:path", newController.show);
router.use("/", newController.index);

module.exports = router;
