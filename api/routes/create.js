var express = require('express');
var router = express.Router();
var fs = require('fs');


    // variables
    const dataPath = "./data/db.json";


    function makeId(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    // READ
    router.post("/", (req, res) => {
        
        fs.readFile(dataPath, "utf8", (err, data) => {

            if(err) {
                console.long(err);
            } else {

                var post = JSON.parse(data);
                console.log(data);
          

                var newPost = {
                    id: makeId(10),
                    title: req.body.title,
                    tags: req.body.tag,
                    text: req.body.text,
                    date: req.body.date
                }
         


                post.push(newPost);

                fs.writeFile(dataPath, JSON.stringify(post, null, 4), 
                function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                      }
                      res.json(post);
                    });
            }
        });
    });


    //   current.db.push(req.body);
    //   fs.writeFileSync('db.json', JSON.stringify(current, null, 4));



  
  module.exports = router;