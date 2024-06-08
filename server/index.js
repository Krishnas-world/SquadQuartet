const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./routes/authRoute.js');
const User = require('./models/userModel.js'); // Ensure the correct path

dotenv.config();

const app = express();
app.use(express.json());

const mongoDB = process.env.MONGO;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('DB Connection Failed:', err));

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST', 'GET'],
    credentials: true,
}));

app.use('/server/auth', auth);

app.get('/students', async (req, res) => {
    try {
        const students = await User.find({ role: 'student' });
        res.json(students);
    } catch (error) {
        console.error('Failed to fetch students:', error);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err);
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}!!`);
});
