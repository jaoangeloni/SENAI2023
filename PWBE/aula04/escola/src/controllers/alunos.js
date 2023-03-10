// const con = require('../dao/connect.js')
const Aluno = require('../models/aluno')

var alunos = []

const teste = (req,res)=>{
    res.json('API Respondendo.').end()
}

const criar = (req, res) => {
    let { nome, nascto } = req.body;
    
    let ra = 1;

    if(alunos.length > 0) {
        ra = alunos[alunos.length-1].ra + 1;
    }
    const aluno = new Aluno(ra, nome, nascto);
    alunos.push(aluno);
    res.status(201).end();
}

const criarVarios = (req, res) => {
    let data = req.body;
    let ra = 1;

    if(alunos.length > 0) {
        ra = alunos[alunos.length-1].ra + 1;
    }

    data.forEach((item, index) => {
        let aluno = new Aluno(ra, item.nome, item.nascto);

        alunos.push(aluno);

        ra++;
    })
    res.status(201).end();
}

const listar = (req, res) => {
    res.status(200).json(alunos).end()
}

const buscar = (req, res) => {
    let { ra } = req.params;

    alunos.forEach((aluno, index) => {
        if(aluno.ra == ra) {
            res.status(200).json(aluno).end();
        }
    });
    res.status(404).end();
}

const atualizar = (req, res) => {
    let { nome, nascto } = req.body;
    let { ra } = req.params;

    alunos.forEach((aluno, index) => {
        if(aluno.ra == ra) {   
            alunos[index] = new Aluno(ra, nome, nascto);
            res.status(200).json(alunos[index]).end();
        }
    })
    res.status(404).end();
}

const deletar = (req, res) => {
    let {ra} = req.params;

    alunos.forEach((aluno, index) => {
        if(aluno.ra == ra) {
            alunos.splice(index, 1);
        }
    });

    res.status(200).json(alunos).end();
}

module.exports={
    teste,
    criar,
    listar,
    buscar,
    atualizar,
    deletar,
    criarVarios
}