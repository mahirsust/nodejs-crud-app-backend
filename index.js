const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const dotenv = require("dotenv")
const app = express();

// middleware
dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

// db and server connect
const dbConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@backenddb.tihcy.mongodb.net/${process.env.DB_COLLECTION_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`
mongoose
  .connect(
    dbConnectionString
  )
  .then(() => {
    console.log("Connected to the Database!");
    app.listen(process.env.DEV_PORT, () => {
      console.log(`Server is running on port ${process.env.DEV_PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
