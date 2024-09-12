const express = require('express');
const app = express();
const path = require('path');

// Route to serve JSON practice data

app.get('/api/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
  });