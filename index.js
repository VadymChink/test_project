const express = require('express');
const mongoose = require('mongoose');
const {join} = require('path');
require('dotenv').config({path: join(process.cwd(),'environment', '.env')})

const {config} = require("./constants");
const {applicantsRouter, positionsRouter} = require("./routes");

const app = express();
mongoose.connect('mongodb+srv://VadymVinnichuk:1t2t3t4t5t@cluster0.jdrlr.mongodb.net/test');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routing
app.use('/applicants', applicantsRouter);
app.use('/positions', positionsRouter);
app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

//fetch error
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknown Error',
            code: err.status || 500,
        })
});

app.listen(config.SERVER_PORT, () => {
    console.log(`Server listen port ${config.SERVER_PORT}`)
})