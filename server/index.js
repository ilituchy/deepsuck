const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

app.use(cors({
  origin: ['http://localhost:3001', 'https://your-frontend-domain.com'],
  credentials: true
}));

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'dolphin-mixtral',  // or 'llama2' depending on which you pulled
      prompt: message,
      stream: false
    });

    res.json({ 
      response: response.data.response,
      model: 'mixtral'
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});