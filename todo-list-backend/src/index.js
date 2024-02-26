// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from './db/index.js'
//    add   "update for importing the dotenv"

// dotenv.config({
//     path: './env'
// })

connectDB();