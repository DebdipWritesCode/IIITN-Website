const path = require("path");
const fs = require("fs");
const Notice = require("../models/notice");

const viewNotices = async (req, res) => {
  try {
    const { notice_type } = req.query;

    let notices;

    if (!notice_type) {
      notices = await Notice.find();
      return res.status(200).json({ message: "Notices fetched successfully", notices });
    }

    notices = await Notice.find({ notice_type });

    res.status(200).json({ message: "Notices fetched successfully", notices });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addNotice = async (req, res) => {
  try {
    const { title, subTitle, url, notice_type } = req.body;

    if (!title || !subTitle || !url || !notice_type) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Please upload an image" });
    }

    // Save only the file path in the database
    const imagePath = `/images/${req.file.filename}`;

    const notice = new Notice({
      title,
      subTitle,
      imageURL: imagePath,
      url,
      notice_type,
    });

    await notice.save();

    res.status(201).json({ message: "Notice added successfully", notice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Notice ID is required" });
    }

    const notice = await Notice.findById(id);
    if (!notice) {
      return res.status(404).json({ error: "Notice not found" });
    }

    const imagePath = path.join(__dirname, "..", "public", notice.imageURL);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await Notice.findByIdAndDelete(id);

    res.status(200).json({ message: "Notice deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { viewNotices, addNotice, deleteNotice };
