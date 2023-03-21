const express = require('express')
const app = express();
const dbConfig = require('./db')

const roomsRoute = require('./routes/roomRoute')

app.use('/api/rooms',roomsRoute);
app.use(express.json());


const port = process.env.PORT || 5000 ;
app.listen(port, ()=>console.log(`Node server Listening on ${port}`));