import express from "express";
import mysql from "mysql";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

// Cria um pool de conexões com o banco de dados MariaDB
const pool = mysql.createPool({
  host: "localhost", // Endereço do banco de dados
  user: "root", // Nome de usuário do banco de dados
  password: "123456", // Senha do banco de dados
  database: "api-yt-project", // Nome do banco de dados
  port: 3306, // Porta de conexão do banco de dados
});

// Exporta o pool para ser usado em outras partes do projeto
export { pool };

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota POST para criação de novos usuários
app.post("/user", (request, response) => {
  const { name, email, password } = request.body; // Extrai dados da requisição

  // Obtém uma conexão do pool
  pool.getConnection((err, connection) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: "Erro ao conectar ao banco de dados", // Mensagem de erro em caso de falha de conexão
        error: err,
      });
    }

    // Criptografa a senha fornecida pelo usuário
    hash(password, 10, (err, hashedPassword) => {
      if (err) {
        connection.release(); // Libera a conexão em caso de erro
        return response.status(500).json({
          success: false,
          message: "Erro ao criptografar a senha", // Mensagem de erro de criptografia
          error: err,
        });
      }

      // Insere o novo usuário no banco de dados
      connection.query(
        "INSERT INTO users (user_id, name, email, password) VALUES (?, ?, ?, ?)",
        [uuidv4(), name, email, hashedPassword], // Gera um ID exclusivo e insere os dados
        (error, results) => {
          connection.release(); // Libera a conexão após o uso

          if (error) {
            return response.status(400).json({
              success: false,
              message: "Erro ao executar a query", // Mensagem de erro ao inserir no banco
              error,
            });
          }

          response.status(200).json({
            success: true,
            message: "Usuário criado com sucesso", // Mensagem de sucesso
          });
        }
      );
    });
  });
});

// Configura o servidor para escutar na porta 4000
app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000"); // Mensagem no console para indicar que o servidor está ativo
});
