const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

let db = null;

const dbPath = path.join(__dirname, "todoApplication.db");

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(port, () => {
      console.log("Server running");
    });
  } catch (e) {
    console.log(`DataBase Error : ${e.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();
module.exports = app;
