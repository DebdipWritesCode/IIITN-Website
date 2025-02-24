const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 4000;
const url = process.env.MONGODB_URI;

const userRoutes = require('./routes/user');

app.use('/user', userRoutes);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url)
    .then(() => {
        console.log('MongoDB connection established successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
