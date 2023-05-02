 const express = require('express') //import express from 'express';
const mongoose = require('mongoose');
//import express from 'express';//тогда надо прописывать type: module
//import mongoose from 'mongoose';
 const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000 //пробуем получить из системных переменных

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://solta:12345@cluster0.daqmsdk.mongodb.net/auth-roles?retryWrites=true&w=majority')
        app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()