"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ message: "Token não fornecido" });
            return;
        }
        // Use a chave correta para verificar o token
        const decoded = (0, jsonwebtoken_1.verify)(token, "segredo"); // A chave deve ser a mesma usada na criação do token
        req.user = decoded;
        next(); // ✅ Continua para a próxima função
    }
    catch (error) {
        console.error("Erro na autenticação:", error);
        res.status(401).json({ message: "Não autorizado" });
    }
};
exports.default = authMiddleware;
