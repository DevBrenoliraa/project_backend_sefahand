import jwt from "jsonwebtoken";

const key_secret = 'senha_secreta_super_forte';

export const verificarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

  if (!token) {
    return res.status(401).json({ 
      success: false,
      statusCode: 401,
      message: "Token não fornecido" 
    });
  }

  try {
    const decodificado = jwt.verify(token, key_secret);
    req.usuario = decodificado; // adiciona info do usuário no request
    next();
    
  } catch (error) {
    res.status(403).json({
      success: false,
      statusCode: 403,
      message: 'Token inválido ou expirado'
    });
  }
};
