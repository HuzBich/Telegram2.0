require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./router');
const mongoose = require('mongoose')


const app = express();
const corsOptions = {
    origin: process.env.origin,
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(router);


mongoose.connect('mongodb+srv://huzbich:2ockDImAQtk4zfcP@cluster0.wy0w00g.mongodb.net/Messenger?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
