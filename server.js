const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require('cors');

app.use(cors())

app.get("/", async (req, res) => {
    const response = await fetch('https://trefle.io/api/v1/plants/search?token=ARRis8D9soRapa7zO8WNfZ-QnLFEYtdM0ngNsagTqAM&q=monstera&limit=1');
    res.json(await response.json());
})

app.listen(3000, () => {
    console.log("Port 3000");
})