
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Api feita por: Marcos Vinicius Simões, 2428054');
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});