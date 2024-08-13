const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.get(("/"),(req,res) => {
    try {
        res.sendFile(
           path.join(__dirname, 'public' , 'pages/index.html')
        )
    } catch (error) {
        console.log(error)
    }
})

app.get(("/template"),(req,res) => {
    try {
        res.sendFile(
           path.join(__dirname, 'public' , 'pages/template.html')
        )
    } catch (error) {
        console.log(error)
    }
})

app.get(("/closed"),(req,res) => {
    try {
        res.sendFile(
           path.join(__dirname, 'public' , 'pages/closed.html')
        )
    } catch (error) {
        console.log(error)
    }
})

app.get(("/current"),(req,res) => {
    try {
        res.sendFile(
           path.join(__dirname, 'public' , 'pages/current.html')
        )
    } catch (error) {
        console.log(error)
    }
})

app.listen(8000, ()=>{
    console.log("server is running");
})

