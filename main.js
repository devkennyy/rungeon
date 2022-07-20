const express = require("express");
const rungeon = express();
const port = 3000;


rungeon.use(express.static(__dirname + "/public"));
rungeon.set('view engine', 'ejs');

rungeon.get("/login", (req, res) => {
    res.render("login", {
        title: "Rungeon - Login"
    });
});

rungeon.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Rungeon - SignUp"
    });
});

rungeon.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
