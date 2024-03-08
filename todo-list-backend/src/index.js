// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import {app} from './app.js'
//    add   "update for importing the dotenv"

dotenv.config({
    path: './env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongo DB connection Failed here !!!", error);
})