import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from 'path';

const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

var { es} = require ('./configurations/config')
establishConnection()

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})

app.use((err, req, res) => {
    res.status(500).json({
        error: err.message
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


