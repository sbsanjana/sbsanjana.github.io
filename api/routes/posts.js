var express = require('express');
var router = express.Router();
var fs = require('fs');

    // variables
    const dataPath = "./data/db.json";
  
    // READ
    router.get("/", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });

  
  module.exports = router;