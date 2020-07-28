const express=require('express');
const mongoose=require('mongoose');
const exphbs=require('express-handlebars');

//create express web server
const app=express();
//express() is root/top level function provided by express js.using this we can create express application
//middleware
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");



const mongodburl="mongodb+srv://anupama97:anupama97@cluster0.xmjha.mongodb.net/anupama97?retryWrites=true&w=majority";
mongoose.connect(mongodburl,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true,
    },
    (err)=>{
        if(err)throw err;
        console.log("database connected successfully")
    })
let port=4500;
//basic route
app.get('/',(req,res)=>{
    //res.send("hello");
    res.render("./home.handlebars");
});
app.get('/login',(req,res)=>{
    res.send(`
    <form>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    <button>Login</button>
    </form>
    `)
})
app.listen(port,(err)=>{
    if(err) throw err;
    console.log("express is running on port number "+port);

});