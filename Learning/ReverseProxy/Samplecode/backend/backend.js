const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the backend server!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
