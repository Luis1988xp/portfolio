import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: "Token não fornecido" });
      return;
    }

    // Use a chave correta para verificar o token
    const decoded = verify(token, "segredo"); // A chave deve ser a mesma usada na criação do token

    (req as any).user = decoded;

    next(); // ✅ Continua para a próxima função
  } catch (error) {
    console.error("Erro na autenticação:", error);
    res.status(401).json({ message: "Não autorizado" });
  }
};

export default authMiddleware;
