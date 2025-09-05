// middleware/auth.js
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  // Verifica se veio o header
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  // O token normalmente vem como "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token inválido" });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adiciona o id do usuário ao request
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    console.error("Erro no middleware de auth:", err);
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

module.exports = authMiddleware;
