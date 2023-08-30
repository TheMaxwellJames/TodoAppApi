const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');

const database = require('./database');
require('dotenv').config();



// app.get('/', );

app.use(express.json());
app.use(express.urlencoded({extended:true}));
database();
app.use(userRoute);


PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT} `);
});