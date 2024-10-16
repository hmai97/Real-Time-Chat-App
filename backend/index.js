const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": "8433100e-d9ff-4723-ab7f-62fdd19ba856" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error during signup:", e.response ? e.response.data : e.message); // More detailed logging
    return res.status(e.response ? e.response.status : 500).json({
      message: e.response ? e.response.data : "Internal Server Error",
    });
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // console.log("Fetch user from DB.");
  // return res.json({ user: {} });

  // Fetch this user from Chat Engine in this project!
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": "f710cb73-f643-462d-808f-7e1a64fa57b5",
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// Docs at rest.chatengine.io
app.listen(3001);