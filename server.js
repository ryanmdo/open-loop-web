//Still not sure what this is for, but I always gotta include it
const bodyParser = require('body-parser');



const express = require('express');
const routes = require('./routes');



const mongoose = require('mongoose');






const app = express();



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nopen_loop_dev_db");

console.log('TESTING')

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `NOPEN-LOOP Backend Server running on PORT: ${PORT}`);


//app.listen(5000)

app.use(routes);
