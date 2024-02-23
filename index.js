const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoute);
mongoose
  .connect(
    "mongodb+srv://myokokomworld:buAcxfA3iX8b1llG@cluster0.tm0qofu.mongodb.net/nodeapi?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("success");
    app.listen(5000, () => console.log("http://localhost:5000"));
  })
  .catch(() => console.log("error"));
