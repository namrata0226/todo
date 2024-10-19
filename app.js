import express from "express";
const app = express();
// const cookieParser = require("cookie-parser");
// const path = require("path");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname + "public")));
// app.set("view engine", "ejs");

app.get("/", (err, res) => {
  res.send("hello");
});
app.listen(8080, (err, res) => {
  console.log("server is running on port: http://localhost:8080/");
});
