const express = require("express"); //our http server
const cors = require("cors"); // call this from any other origin
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
//rest.chatengine.io for docs
app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // console.log("Write user into DB.");
  // return res.json({ user: {} });

  // Store a user-copy on Chat Engine!
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username:username, secret:secret, email:email, first_name:first_name, last_name:last_name },
      { headers: { "Private-Key": "8433100e-d9ff-4723-ab7f-62fdd19ba856" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
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
/*
app.post("/authenticate", async (req, res) => {
  const { username,secret } = req.body; //take username from req body
  
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: secret, first_name: username},
      {headers :{"private-key" : "8433100e-d9ff-4723-ab7f-62fdd19ba856"}}
    )
      return res.status(r.status).json(r.data)
    } catch(e){
      return res.status(e.response.status).json(e.response.data)
    }
  });
*/
app.listen(3001); //port 3001 
