const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 1990;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// admin router
const apiRout = require("./Routes/api");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => {
  console.log("successfully ↔️  connected to 🌱 MongoDB Server");
  console.log("\x1b[93mdebugging procces 👇🏼 :\x1b[39m\n");
});

// Static Files
// app.use(express.static("./Public"));
app.use(express.static(path.join(__dirname, "./Public"))); // Masih Belum Ngerti Maksud Harus ngasih __dirname

// Configure CORS
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Setup Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/api/v1", apiRout);

// Listen Port
app.listen(port, () => {
  console.log("");
  console.log(
    `\x1b[93mBackend Service For Images now running 🚀 on  http://localhost:${port}\x1b[39m`
  );
  console.log("");
  console.log(
    "\x1b[93mBuild by\x1b[39m \x1b[91mhttps://github.com/sanengineer\x1b[91m \x1b[93mgive ⭐️ start, 🍴 fork and 🧲 clone others repository\x1b[39m."
  );
  console.log("");
});
