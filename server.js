const express = require("express");
const connectDB = require("./config/db");
const { check, validationResult } = require("express-validator");
const app = express();

//Connect DB
connectDB();

const port = process.env.PORT || 5000;

app.use(express.json()); //Used to parse JSON bodies

app.post("/", async (req, res) => {
    const { item_code, brand_name, password } = req.body;
})

app.listen(port, () => console.log(`Server started on port ${port}`));