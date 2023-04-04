const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 1000;


//Setting view engine
app.set("view engine", "hbs");
const template_path = path.join(__dirname,"../template/views");
const partials_path = path.join(__dirname,"../template/partials");
app.set("views", template_path);
hbs.registerPartials(partials_path)

// Public static Path   (Link Index File)
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));


// Routing
app.get("/", (req,res)=>{
    res.render("index");
})

app.get("/about", (req,res)=>{
    res.render("about");
})

app.get("/weather", (req,res)=>{
    res.render("weather");
})

app.get("*", (req,res)=>{
    res.render("404error",{
        errMsg:"Opps Page Not Found"
    });
})

app.listen(port,()=>{
    console.log(`Listning to port number ${port}`)
})