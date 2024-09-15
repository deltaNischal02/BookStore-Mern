import express from "express";
import { PORT,mongoBDURL } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('welcome to mern stack development')
    
});




mongoose.connect(mongoBDURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is running in port: ${PORT}`);
        
    });
})
.catch((error)=>{
    console.log(error);
    
});