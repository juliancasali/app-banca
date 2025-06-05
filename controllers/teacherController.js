const Professor = require('../models/Teacher');

// Buscar todos os professores
const getProfessores = async (req, res) => {
    try {
        const professores = await Professor.find();
        res.json(professores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar professor por ID
const getProfessorPorId = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) return res.status(404).json({ message: "Professor não encontrado" });
        res.json(professor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar um professor
const criarProfessor = async (req, res) => {
    try {
        const professor = new Professor(req.body);
        await professor.save();
        res.status(201).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar professor
const atualizarProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!professor) return res.status(404).json({ message: "Professor não encontrado" });
        res.json(professor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remover professor
const removerProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByIdAndDelete(req.params.id);
        if (!professor) return res.status(404).json({ message: "Professor não encontrado" });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getProfessores, getProfessorPorId, criarProfessor, atualizarProfessor, removerProfessor };