require('dotenv').config();

const express = require('express');
const connectDatabase = require('./config/database');
const alunosRoutes = require('./routes/alunos');

const jwt = require('jsonwebtoken');
const verificarToken = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (
        usuario !== process.env.ADMIN_USER ||
        senha !== process.env.ADMIN_PASSWORD
    ) {
        return res.status(401).json({
            mensagem: 'Usuário ou senha inválidos.'
        });
    }

    const token = jwt.sign(
        { usuario },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.status(200).json({ token });
});

app.use('/alunos', alunosRoutes);

const iniciarServidor = async () => {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`API rodando em http://localhost:${PORT}`);
    });
};

iniciarServidor();