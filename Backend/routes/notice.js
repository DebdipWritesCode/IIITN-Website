const express = require("express");
const router = express.Router();
const { viewNotices, addNotice, deleteNotice } = require("../controllers/notice");
const upload = require("../middleware/upload");

router.get("/", viewNotices);
router.post("/add", upload.single("image"), addNotice);
router.delete("/:id", deleteNotice);

module.exports = router;
