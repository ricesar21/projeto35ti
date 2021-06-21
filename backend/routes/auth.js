const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const result = await User.findAll({
        where: {
            email: req.body.email,
            senha: sha256(req.body.senha + "767")
        }
    });
    

    if (!result.length) {
        res.status(403).json({ auth: false });
    }
    const token = jwt.sign({ id: result.id }, 'play', { expiresIn: 600 });
    res.status(200).json({ 
        auth: true,
        token: token,
        id: result[0].dataValues.id, 
        nomeCompleto: result[0].dataValues.nomeCompleto, 
        usuario: result[0].dataValues.usuario,
        email: result[0].dataValues.email,
    });
});


module.exports = router;