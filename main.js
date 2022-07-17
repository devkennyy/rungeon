const express = require("express");
const rungeon = express();
const port = 3000;


rungeon.engine('html', require('ejs').renderFile);
rungeon.use(express.static("public"));

rungeon.listen(port, () => {
    console.log(`listening on port ${port}`);
});
