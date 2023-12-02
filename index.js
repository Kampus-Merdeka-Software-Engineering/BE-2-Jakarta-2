import express from "express";
import cors from "cors";
import router from "./route/booking-route.js";
import router from "./route/home-route.js";
import router from "./route/login-route.js";
import router from "./route/payment-route.js";
import { fileURLToPath } from 'url';
import path from 'path';
import db from './configurations/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const express = require('express');
const app = express();
const port = 3000;

var { es} = require ('./configurations/config');
establishConnection();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(path.join(__dirname, 'https://github.com/Kampus-Merdeka-Software-Engineering/FE-2-Jakarta-2')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'https://github.com/Kampus-Merdeka-Software-Engineering/FE-2-Jakarta-2/blob/main/booking.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'https://github.com/Kampus-Merdeka-Software-Engineering/FE-2-Jakarta-2/blob/main/home.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'https://github.com/Kampus-Merdeka-Software-Engineering/FE-2-Jakarta-2/blob/main/login.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'https://github.com/Kampus-Merdeka-Software-Engineering/FE-2-Jakarta-2/blob/main/payment.html'));
});

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

app.use((err, req, res) => {
    res.status(500).json({
        error: err.message
    });
});

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});