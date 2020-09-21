import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import routes from './routes/index';
import path from 'path';

// Express App
const app = express();


app.use(express.static(path.join(__dirname, '/build')));

// Loads all variabled from .env files to "process.env"

// Helmet helps secure the app by setting various HTTP Headers
app.use(helmet());


const PORT = process.env.PORT || 4000;

// CORS Setup
app.use(cors());

// Helmet Setup
app.use(helmet());

// Bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => 
    console.log(`The server is running on port ${PORT}`),
);
