const express = require("express");
const app = express();
require("dotenv").config(); //dotenv 




app.listen(process.env.PORT, ()=> {
console.log('Servidor web escuchando en el puerto http://localhost:'+process.env.PORT);}
);

app.get('/',(req,res)=>{


	res.send('<h1>Web Page Testing</h1><br><h2>Last Update: Feb-28-2022 23:07 Hrs</h2>')
})