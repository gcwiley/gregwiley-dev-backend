import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import routes from './routes/index';
import path from 'path';

// Express App
const app = express();

// app.use(express.static(path.join(__dirname, '/build')));

// Loads all variabled from .env files to "process.env"
require('dotenv').config();

// Helmet helps secure the app by setting various HTTP Headers
app.use(helmet());

// JSON Body Parser
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

// SET UP Mongo DB HERE
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(process.env.MONGO_URI, mongooseOptions)
    .then(() => console.log('Successfully connected to the database'))

mongoose.connection.on('error', err => {
    console.error(`DB connection error: ${error.message}`)
});

// apply routes from the "routes" folder
app.use('/', routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

// port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
