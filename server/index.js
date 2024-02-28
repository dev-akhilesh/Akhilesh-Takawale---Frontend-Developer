const express = require('express');
const cors = require("cors");
const fs = require('fs');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, this is a Matrix Labs API !');
});

app.get('/data', (req, res) => {
    const data = fs.readFileSync('data.json', 'utf8');
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
