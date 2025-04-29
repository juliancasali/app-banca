const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {loginValidate, registerValidate} = require('./validate')

const userController = {
    register: async function (req, res) {

        try {
            // Validação dos dados
            const {error} = registerValidate(req.body);
            if (error) {
                return res.status(400).json({
                    error: 'error.message',
                    code: 400
                });
            }

            // Verifica se o email já existe
            const selectedUser = await User.findOne({email: req.body.email})
            if (selectedUser) {
                return res.status(400).json({
                    error: 'Email already exists',
                    code: 400
                });
            }
            // Criação do novo usuário com hash assíncrono
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt); // Criptografa a senha

            // Criação do novo usuário
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })


            // Salva o usuário no banco de dados
            const savedUser = await user.save()
            res.status(201).json({
                message: 'User registered successfully',
                user: savedUser
            });
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message,
                code: 500
            });

        }
    },
    login: async function (req, res) {

        try {
            // Validação dos dados
            const {error} = loginValidate(req.body);
            if (error) {
                return res.status(400).json({
                    error: error.message,
                    code: 400
                });

            }
            // Verifica se o usuário existe
            const selectedUser = await User.findOne({email: req.body.email})
            if (!selectedUser) {
                res.status(400).json({
                    error: 'Email or password incorrect',
                    code: 400
                });
            }

            // Verifica se a senha está correta
            const passwordAndUserMatch = await bcrypt.compareSync(req.body.password, selectedUser.password)
            if (!passwordAndUserMatch) {
                return res.status(400).json({
                    error: 'Email or password incorrect',
                    code: 400
                });
            }

            // Gera o token JWT com tempo de expiração
            const token = jwt.sign(
                {_id: selectedUser._id, admin: selectedUser.admin},
                process.env.TOKEN_KEY,
                {expiresIn: '1h'} // Token expira em 1 hora
            );

            // Retorna o token para o cliente
            return res.status(200).json({
                message: 'User logged successfully',
                token: token
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal Server Error',
                details: error.message,
                code: 500
            });
        }
    }
};
module.exports = userController;