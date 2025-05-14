import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do pool de conexões com o banco de dados
export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost", // Endereço do servidor do banco de dados
  user: process.env.DB_USER || "root", // Usuário do banco de dados
  password: process.env.DB_PASSWORD || "password", // Senha do banco de dados
  database: process.env.DB_NAME || "database", // Nome do banco de dados
  port: Number(process.env.DB_PORT) || 3306, // Porta do banco de dados
});

// Exporta o segredo JWT
export const JWT_SECRET = process.env.JWT_SECRET || "segredo"; // Chave JWT

// nome da palavra secreto antes era ( "defaultSecret" )
