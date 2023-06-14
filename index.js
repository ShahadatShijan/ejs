const express = require('express')
let ejs = require('ejs')
require("dotenv").config()
const app = express()
const port = process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs")

let pLanguages = [];

app.get('/', (req, res) => {
  res.render("index",{languages: pLanguages});
})

app.get('/contact', (req, res) => {
    res.render("contact",{});
})

app.post('/', (req, res) => {
    const language = req.body.language;
    pLanguages.push(language);
    res.redirect("/")
  })
  

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})