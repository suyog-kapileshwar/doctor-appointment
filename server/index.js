import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/data.js';

const app = express();

app.use('/data', postRoutes)

app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(cors());

// Connect App with database Mongodb Atlas
const CONNECTION_URL = 'mongodb+srv://suyog_kapileshwar:Suyog@cluster0.vhjrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) ))
.catch( (error) => console.log(error.message) );