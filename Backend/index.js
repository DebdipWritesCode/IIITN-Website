const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = 4000;
const url = process.env.MONGODB_URI;

const userRoutes = require('./routes/user');
const noticeRoutes = require('./routes/notice');

app.use(cors());
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.use('/user', userRoutes);
app.use('/notice', noticeRoutes);

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

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
