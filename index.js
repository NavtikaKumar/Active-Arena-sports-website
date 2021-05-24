const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const exphbs = require("express-handlebars");

var app = express();
const route = require("./routes/route");

//configuration for handlebars
app.set('views', path.join(__dirname,"views"));
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(express.json());      
app.use(express.urlencoded());

app.use(cors());
app.use(express.static(path.join(__dirname,"/public")));
app.use('/api',route);

app.get('/',(req,res) => {res.render('home'); })
app.get('/about-us', (req,res) => {res.render('about-us'); })
app.get('/trainers', (req, res) => {res.render('trainers'); })
app.get('/membership', (req, res) => {res.render('membership'); })
app.get('/register', (req,res) => {res.render('regform'); })
app.get('/apply', (req,res) => {res.render('application'); })
app.get('/facilities', (req,res) => {res.render('facilities'); })
app.get('/api/register',(req,res) => {res.render('successReg'); })
app.get('/api/apply', (req,res) => {res.render('successApply'); })

app.listen(3000, () => {console.log("Server running on port 3000")});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ActiveArena", {useNewUrlParser: true, useUnifiedTopology: true}, 
            (err) => {
    if(!err) {console.log("Yay! Connection successful!");}
    else {console.log("Oops! Connection failed!");}
});

