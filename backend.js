require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const mongoose = require('mongoose');

app.use(cors());

const db = process.env.MongoURI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () => {
    console.log('Server Running')
});

