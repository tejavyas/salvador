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
// tells api that it only wants to handle JSON data
app.use(cors());
app.use(express.json());

// create first endpoint
// argument 1: url to navigate to
// argument 2: async callback function
app.post('/jsProject1', async (req,res) => {
    try {
        // inside the function, we want to access the user's prompt
        const prompt = req.body.prompt;
        // pass it off to openAI api method
        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
        });
        const image = aiResponse.data.data[0].url;
        res.send({image});
    } catch (error) {
        console.error(error)
        res.status(500)
    }
});

app.listen(8080, () => console.log('make art at http://localhost:8080/jsProject1'));