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
                    error: 'O email já existe',
                    code: 400
                });
            }
            // Criação do novo usuário com hash assíncrono
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt); // Criptografa a senha

            // Criação do novo usuário
            const user = new User({
                nome: req.body.nome,
                email: req.body.email,
                password: hashedPassword
            })


            // Salva o usuário no banco de dados
            const savedUser = await user.save()
            res.status(201).json({
                message: 'Usuário registrado com sucesso',
                user: savedUser
            });
        } catch (error) {
            res.status(500).json({
                error: 'Erro Interno do Servidor',
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
            const user = await User.findOne({email: req.body.email})
            if (!user) {
                res.status(400).json({
                    error: 'Email ou senha incorretos',
                    code: 400
                });
            }

            // Verifica se a senha está correta
            const passwordAndUserMatch = await bcrypt.compareSync(req.body.password, user.password)
            if (!passwordAndUserMatch) {
                return res.status(400).json({
                    error: 'Email ou senha incorretos',
                    code: 400
                });
            }

            // Gera o token JWT com tempo de expiração
            const token = jwt.sign(
                {_id: user._id, admin: user.admin},
                process.env.TOKEN_KEY,
                {expiresIn: '1h'} // Token expira em 1 hora
            );

            // Retorna o token para o cliente
            return res.status(200).json({
                message: 'Usuário logado com sucesso',
                token: token
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Erro Interno do Servidor',
                details: error.message,
                code: 500
            });
        }
    },

    logout: async function (req, res) {
        res.json({success: true});
    }
};
module.exports = userController;