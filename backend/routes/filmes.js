const express = require('express');
const router = express.Router();
const { Filme } = require('../models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const filmes = await Filme.findAll();
    res.status(200).json(filmes);
});

router.get('/:id', async (req, res) => {
    const filmes = await Filme.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(filmes)
});

router.get('/nome/:nome', async (req, res) => {
    const filmes = await Filme.findAll({
         where: {
            nome: {
             [Op.like]: `${req.params.nome}%`
            }
        }
      
         
    });
    res.status(200).json(filmes);
});

router.get('/categoria/:categoria', async (req,res) => {
    const filmes = await Filme.findAll({
        where: {
            categoria: {
                [Op.or]: `${req.params.categoria}%`
            }
        }

    });
    res.status(200).json(filmes);
});

router.post('/', async (req, res) => {
    const filmes = await Filme.create(req.body)
    res.status(201).json(filmes)
});

router.put('/:id', async (req, res) => {
    const filmes = await Filme.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(filme);
});

router.delete('/:id', async (req,res) => {
    const filmes = await Filme.destroy({
        where: {
            id: req.params.id
        }
    });
     res.status(200).json(filme)
});

module.exports = router


