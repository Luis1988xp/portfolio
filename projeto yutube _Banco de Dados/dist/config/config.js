"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
// Carrega as variáveis de ambiente do arquivo .env
dotenv_1.default.config();
// Configuração do pool de conexões com o banco de dados
exports.pool = promise_1.default.createPool({
    host: process.env.DB_HOST || "localhost", // Endereço do servidor do banco de dados
    user: process.env.DB_USER || "root", // Usuário do banco de dados
    password: process.env.DB_PASSWORD || "password", // Senha do banco de dados
    database: process.env.DB_NAME || "database", // Nome do banco de dados
    port: Number(process.env.DB_PORT) || 3306, // Porta do banco de dados
});
// Exporta o segredo JWT
exports.JWT_SECRET = process.env.JWT_SECRET || "segredo"; // Chave JWT
// nome da palavra secreto antes era ( "defaultSecret" )
