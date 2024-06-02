const express = require('express') 
const cors = require('cors');
const auth = require('./routes/authRoute.js');
// ! Environment Variables
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(express.json())

// ! DB Related
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO;

mongoose.connect(mongoDB)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('DB FAILED',err))

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ['POST','GET'],
        credentials: true,
    })
)

// ! Show the routes
// app.use('/server/auth', auth);
// ! Add error middleware
app.use((err, req, res, next) => { 
    const statusCode = err.statusCode || 500;
    const mes = err.mes || 'Internal Server error';
    console.error(err); // Log the error to the console
    res.status(statusCode).json({
      success: false, 
      statusCode,
      mes
    });
  });
  

//! Listen to the server
app.listen(3000, () => {
    console.log("Server is running at 3000 !!");
});