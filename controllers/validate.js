const Joi = require('@hapi/joi')

// Validação de registro
const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .required()
            .min(3)
            .max(50)
            .messages({
                'string.min': 'O nome deve ter pelo menos 3 caracteres.',
                'string.max': 'O nome deve ter no máximo 50 caracteres.',
                'any.required': 'O nome é obrigatório.'
            }),
        email: Joi.string()
            .required()
            .email()
            .messages({
                'string.email': 'Formato de email inválido.',
                'any.required': 'O email é obrigatório.'
            }),
        password: Joi.string()
            .required()
            .min(6)
            .max(100)
            .messages({
                'string.min': 'A senha deve ter pelo menos 6 caracteres.',
                'string.max': 'A senha deve ter no máximo 100 caracteres.',
                'any.required': 'A senha é obrigatória.'
            })
    });

    return schema.validate(data) //retorna todos os erros encontrados
};

// Validação de login
const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email()
            .messages({
                'string.email': 'Formato de email inválido.',
                'any.required': 'O email é obrigatório.'
            }),
        password: Joi.string()
            .required()
            .min(6)
            .max(100)
            .messages({
                'string.min': 'A senha deve ter pelo menos 6 caracteres.',
                'string.max': 'A senha deve ter no máximo 100 caracteres.',
                'any.required': 'A senha é obrigatória.'
            })
    });

    return schema.validate(data)
}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;