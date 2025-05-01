const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API is working'));
app.listen(3001, () => console.log('Server running on port 3001'));
