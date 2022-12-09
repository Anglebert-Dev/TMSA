const express = require("express");
const cors = require("cors");


const Tutorialroutes = require('./routes/tutorials')

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json())
app.use('/api' , Tutorialroutes)



module.exports = app;