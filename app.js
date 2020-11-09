const express = require("express");
const app = express();

const apiInfoRouter = require('./routes/api/apiInfo');

app.listen(3030, function(){
    console.log("Running on 3030");
});

app.use('/api/info', apiInfoRouter);