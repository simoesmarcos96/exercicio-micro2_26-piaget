const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');
const verificarToken = require('../middleware/auth');
// GET - Listar alunos
router.get('/', async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// POST - Cadastrar aluno
router.post('/', async (req, res) => {
    try {
        const { nome, curso } = req.body;

        const aluno = await Aluno.create({ nome, curso });

        res.status(201).json(aluno);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// PUT - Atualizar aluno
router.put('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        res.json(aluno);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// DELETE - Excluir aluno
router.delete('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndDelete(req.params.id);

        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        res.json({ mensagem: 'Aluno excluído com sucesso!' });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

module.exports = router;