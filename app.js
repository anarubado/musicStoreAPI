const express = require("express"); // Requerimos la gran función de Express 
const app = express(); // Ejecutamos esta función la cual devolverá un objeto literal con muchos métodos y atributos

const cors = require("cors");
app.use(cors());

const apiInfoRouter = require('./routes/api/apiInfo'); // Requerimos el router

app.listen(3030, function(){
    console.log("Running on 3030"); // Express levantará un servidor y éste escuchará en el puerto 3030
});


app.use('/api/info', apiInfoRouter); // Asignamos que la ruta "/api/info" apunte a nuestro router particular que requerimos