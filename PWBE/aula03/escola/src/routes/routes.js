
const express = require("express");
const router = express.Router();
const Alunos = require('../controllers/alunos');

router.get('/', Alunos.teste);
router.post('/alunos', Alunos.criar);
router.get('/alunos', Alunos.listar);

module.exports = router;
