const express =require('express');
const config=require('./config');
const mongoose=require('mongoose');
const app=express();
mongoose.connect(config.database);
var port=process.env.port||8001;
app.listen(port, function(){
    console.log('connect successfully', port)
});