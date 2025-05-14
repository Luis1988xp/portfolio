// Importa o módulo 'express', que facilita a criação de aplicativos web e APIs
import express from "express";

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para processar o corpo da requisição no formato JSON
app.use(express.json());

// Define uma rota GET para o caminho raiz ("/")
app.get("/", (request, response) => {
  // Envia uma resposta JSON contendo informações do usuário
  response.json({
    name: "luis", // Nome do usuário
    age: 35, // Idade do usuário
    mora: "salvador", // Cidade onde o usuário mora
  });
});

// Define uma rota GET para "/users"
app.get("/users", (request, response) => {
  // Envia uma resposta JSON com uma lista de objetos contendo informações sobre usuários
  response.json([
    {
      message: "que show da xuxa é esse?", // Mensagem associada ao primeiro usuário
      name: "luis", // Nome do primeiro usuário
    },
    {
      age: 35, // Idade do segundo usuário
      mora: "salvador", // Cidade onde o segundo usuário mora
    },
  ]);
});

// Define uma rota POST para "/userdata/:id/:email" com parâmetros na URL
app.post("/userdata/:id/:email", (request, response) => {
  // Exibe no console os dados enviados no corpo da requisição
  console.log(request.body); // Exemplo de dados no body: { "key": "value" }

  // Exibe no console os parâmetros da URL
  console.log(request.params); // Exemplo: { id: "123", email: "user@example.com" }

  // Exibe no console os parâmetros da query string
  console.log(request.query); // Exemplo: ?name=luis&age=35

  // Exibe no console os cabeçalhos da requisição
  console.log(request.headers); // Exemplo: { "content-type": "application/json" }

  // Envia uma resposta JSON indicando sucesso
  response.status(200).json({ success: true });
});

// Faz o servidor escutar na porta 4000 e exibe uma mensagem no console
app.listen(4000, () => {
  console.log("servidor escutando na porta 4000");
});
