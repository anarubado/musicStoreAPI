const express = require("express");
const app = express();
const cors = require("cors");

const apiRouter = require('./routes/api');

app.use(cors);

app.listen(3030, function(){
    console.log("Running on 3030");
});

app.use('/api', apiRouter);
