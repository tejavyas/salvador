import * as dotenv from 'dotenv';
dotenv.config();

import {Configuration,OpenAIApi} from 'openai';
const configuration = new Configuration({
    apiKey : process.env.OPENAI,
})
const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

// the app object is where you'll set up routes, middleware, and start your server
// middleware is code that runs on every single request
const app = express();
// cross origin resource sharing
app.use(cors());
// tells api that it only wants to handle JSON data
app.use(express.json());

// create first endpoint
app.post('/jsProject1');