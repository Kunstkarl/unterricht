const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.engine("ejs", require("ejs").__express);
app.set("view engine", "ejs");

const DATABASE = "shop.db";
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(DATABASE);

app.listen(3000, function(){
    console.log("Läuft auf 3000");
});

app.get("/produktliste", function(req, res){
    db.all(`SELECT * FROM produkte`),
    function(err, rows){
        res.render("produktliste", {"produkte": rows});
    }
});