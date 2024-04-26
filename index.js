const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRouter = require("./routes/product.routs");
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use("/api/v1/products", productRouter);

// DATABASE
mongoose
  .connect(
    "mongodb+srv://507asadali:NXGlTfhhhOBkhHXQ@cluster0.l8a5bsd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    const port = 4000;
    app.listen(port, () => console.log(`SERVER is running ${port}`));
    console.log("DATABASE CONNECTED");
  })
  .catch((r) => console.log("DATABASE FAILED ", err));
