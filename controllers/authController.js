const jwt = require("jsonwebtoken");


const authController = {
    auth: function (req, res, next) {
        const token = req.header('authorization-token');

        // Verifica se o token foi fornecido
        if (!token) {
            return res.status(401).json({
                error: 'Access Denied: No token provided',
                code: 401
            });
        }

        try {
            // Verifica e decodifica o token usando a chave secreta
            const decoded = jwt.verify(token, process.env.TOKEN_KEY);
            req.user = decoded;
            next()
        } catch (error) {
            // Trata diferentes tipos de erros relacionados ao token
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({
                    error: 'Access Denied: Token has expired',
                    code: 401
                });
            } else if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({
                    error: 'Access Denied: Invalid token',
                    code: 401
                });
            } else {
                return res.status(500).json({
                    error: 'Server Error: Unable to process token',
                    code: 500
                });

            }
        }
    }
}
module.exports = authController;