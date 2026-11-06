require('dotenv').config();

const express = require('express');
const connectDatabase = require('./config/database');
const alunosRoutes = require('./routes/alunos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de alunos funcionando!');
});

app.use('/alunos', alunosRoutes);

const iniciarServidor = async () => {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`API rodando em http://localhost:${PORT}`);
    });
};

iniciarServidor();