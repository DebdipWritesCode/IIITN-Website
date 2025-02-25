const axios = require("axios");

const search = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Please provide a search query" });
    }

    const response = await axios.get(`http:localhost:8000/search?query=${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    res.status(200).json({ message: "Search results fetched successfully", results: response.data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { search };