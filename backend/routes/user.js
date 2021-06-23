const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');

router.get('/', /* verifyJWT ,*/  async (req, res) => {
    const users = await User.findAll({
        attributes: ['email', 'nomeCompleto', 'usuario']
    });

    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const users = await User.create({
        usuario: req.body.usuario,
        nomeCompleto: req.body.nomeCompleto,
        email: req.body.email,
        senha: sha256(req.body.senha + "767"),
        permissao: 'user'
    });
    res.status(201).json(users);
});

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users)
});

router.get('/:id', async (req, res) => {
    const users = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(users)

});

router.put('/:id', async (req, res) => {
    const result = await User.findAll({
        
    });

    const users = await User.update(req.body, {
        where: {
            id: req.params.id
        }

    });
    
    res.status(200).json({
        id: result[0].dataValues.id,
        nomeCompleto: result[0].dataValues.nomeCompleto,
        usuario: result[0].dataValues.usuario,
        email: result[0].dataValues.email
    })
});


module.exports = router