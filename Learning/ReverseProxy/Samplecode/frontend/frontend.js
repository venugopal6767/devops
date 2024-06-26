const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the frontend server!');
});

app.listen(port, () => {
  console.log(`Frontend server is running on http://localhost:${port}`);
});
