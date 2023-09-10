const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require('cors');

app.use(cors())

app.get("/", async (req, res) => {
    const response = await fetch(url);
    res.json(await response.json());
})

app.listen(3000, () => {
    console.log("Port 3000");
})