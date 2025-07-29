require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

// In-memory conversation storage
const conversations = {};

// Serve static files from the public directory
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const keywords = ['love', 'relationship', 'heart', 'dating', 'romance'];

app.get('/ask', async (req, res) => {
  const user = req.query.user || 'default';
  const question = req.query.question;

  if (!question) {
    return res.status(400).send('Please provide a question.');
  }

  // Check for love-related keywords
  if (!keywords.some(keyword => question.toLowerCase().includes(keyword))) {
    conversations[user] = conversations[user] || [];
    conversations[user].push({ question, answer: 'Invalid question' });
    return res.send('Invalid question');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(question);
    const answer = result.response.text();

    conversations[user] = conversations[user] || [];
    conversations[user].push({ question, answer });

    res.send(answer);
  } catch (error) {
    console.error(error);
    if (error.status === 429 || error.code === 429) {
      res.status(429).send('Gemini API quota exceeded. Please check your Google AI usage and billing.');
    } else if (error.status === 401 || error.code === 401) {
      res.status(401).send('Invalid Gemini API key. Please check your API key.');
    } else if (error.status === 503 || error.code === 503 || (error.statusText && error.statusText === 'Service Unavailable')) {
      res.status(503).send('Gemini model is overloaded or temporarily unavailable. Please try again later.');
    } else {
      res.status(500).send('Error processing your request');
    }
  }
});

// Optional: Endpoint to view conversation history
app.get('/history', (req, res) => {
  const user = req.query.user || 'default';
  res.json(conversations[user] || []);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 