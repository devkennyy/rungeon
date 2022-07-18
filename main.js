const express = require("express");
const { appendFile } = require("fs");
const rungeon = express();
const port = 3000;


rungeon.use(express.static(__dirname + '/public'));
rungeon.set('view engine', 'ejs');


rungeon.get("/achievements", (req, res) => {
    res.render("achievements");
});

rungeon.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
