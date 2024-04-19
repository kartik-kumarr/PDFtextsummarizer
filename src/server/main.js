import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

import express from "express";
import ViteExpress from "vite-express";
import ollama from 'ollama';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


async function chatWithModel(modelName, prompt) {
    try {
      const response = await ollama.chat({
        model: modelName,
        messages: [{ role: 'user', content: prompt }],
      });
      return response;
    } catch (error) {
      console.error('Error while chatting with model:', error);
      throw error; 
    }
  }

  app.post('/uploadPdf', async(req, res) => {
    const text = "Generate a concise summary of following text, and highlight key insights in paragraph from the following text."+ req.body.text;
    try {
        // Output from llama2
        const response1 = await chatWithModel('llama2', text);
        // Output from phi
        const response2 = await chatWithModel('phi', text);
        
        console.log('Response from llama2:', response1.message.content);
        console.log('Response from phi:', response2.message.content);
        
        res.status(200).send({
            response1: response1.message.content,
            response2: response2.message.content
        });
    } catch (error) {
        console.error('Error processing text:', error);
        res.status(500).send('Error processing text.');
    }
});

app.post('/Textprompt', async(req, res) => {
    const text = "Generate a concise summary of following text, and highlight key insights in paragraph from the following text."+ req.body.text;
    try {
        // Output from llama2
        const response1 = await chatWithModel('llama2', text);
        // Output from phi
        const response2 = await chatWithModel('phi', text);
        
        console.log('Response from llama2:', response1.message.content);
        console.log('Response from phi:', response2.message.content);
        
        res.status(200).send({
            response1: response1.message.content,
            response2: response2.message.content
        });
    } catch (error) {
        console.error('Error processing text:', error);
        res.status(500).send('Error processing text.');
    }
});


const port = 8080
ViteExpress.listen(app, port, () =>
    console.log(`Server is listening on port ${port}`),
);
