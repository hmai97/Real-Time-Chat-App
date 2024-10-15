const express = require("express"); //our http server
const cors = require("cors"); // call this from any other origin
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
//rest.chatengine.io for docs
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

app.listen(3001); //port 3001 
