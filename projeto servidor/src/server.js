// Importa o módulo 'express', que é utilizado para criar o servidor e gerenciar rotas
const express = require("express");

// Cria uma instância do aplicativo express
const app = express();

// Middleware para parsear o corpo da requisição como JSON
app.use(express.json());

// Define uma rota GET para o caminho raiz ("/")
// Quando um cliente acessar a raiz do servidor, ele receberá uma resposta no formato JSON
!app.get("/", (request, response) => {
  // A resposta será um objeto JSON contendo as informações de nome, idade e cidade
  response.json({
    message: " bem vindo ao meu servidor",
    name: "luis",
    age: 35,
    mora: "salvador",
  });
});

app.get("/users", (request, response) => {
  // A resposta será um objeto JSON contendo informações sobre os usuários
  // O primeiro objeto possui o nome e uma mensagem.
  // O segundo objeto contém a idade e a cidade de moradia.
  response.json([
    {
      message: "que show da xuxa é esse?", // Mensagem associada ao usuário "luis"
      name: "luis",
    },
    {
      age: 35, // Idade do segundo usuário
      mora: "salvador", // Cidade onde o segundo usuário mora
    },
  ]);
});

//                    BODY PARAMS

// Definindo uma rota POST para o endpoint "/userdata"
app.post("/userdata", (request, response) => {
  // Imprime no console os dados enviados no corpo da requisição
  console.log(request.body);

  // Envia uma resposta com status 200 (OK) e um objeto JSON indicando sucesso
  response.status(200).json({ sucess: true });
});

//                  ROUTE PARAMS

// Definindo uma rota POST para o endpoint "/userdata/:id/:email"
// app.post("/userdata/:id/:email", (request, response) => {
// Imprime no console os dados enviados no corpo da requisição (request.body)
// O corpo da requisição pode conter informações como o payload enviado no body (geralmente em formato JSON)
//   console.log(request.body);

// Imprime no console os parâmetros da URL (request.params)
// Os parâmetros são extraídos da URL, e aqui temos os valores de ":id" e ":email"
//   console.log(request.params);

// Envia uma resposta com status 200 (OK) e um objeto JSON indicando que a operação foi bem-sucedida
// O código de status 200 indica que a requisição foi processada com sucesso
//   response.status(200).json({ sucess: true });
// });

//                          QUERY PARAMS

// //?   PARA ESTE ENDIPINT FUNCIONAR PRECISAR COMENATR O DE CIMA MEIS SÃO OS MESMO ENDIPOINT ("/userdata/:id/:email", )

// Definindo uma rota POST para o endpoint "/userdata/:id/:email"
// app.post("/userdata/:id/:email", (request, response) => {
// Imprime no console os dados enviados no corpo da requisição (request.body)
// O corpo da requisição pode conter informações como o payload enviado no body (geralmente em formato JSON)
//   console.log(request.body);

// Imprime no console os parâmetros da URL (request.params)
// Os parâmetros são extraídos da URL, e aqui temos os valores de ":id" e ":email"
//   console.log(request.params);

// Imprime no console os parâmetros da query string (request.query)
// A query string é representada após o "?" na URL. Exemplo: "?name=babe&age=56"
//   console.log(request.query);

// Envia uma resposta com status 200 (OK) e um objeto JSON indicando que a operação foi bem-sucedida
// O código de status 200 indica que a requisição foi processada com sucesso
//   response.status(200).json({ success: true }); // Corrigido de "sucess" para "success"
// });

//                        HEADER PARAMS

app.post("/userdata/:id/:email", (request, response) => {
  // Imprime no console os dados enviados no corpo da requisição (request.body)
  // O corpo da requisição pode conter informações como o payload enviado no body (geralmente em formato JSON)
  console.log(request.body);

  // Imprime no console os parâmetros da URL (request.params)
  // Os parâmetros são extraídos da URL, e aqui temos os valores de ":id" e ":email"
  console.log(request.params);

  // Imprime no console os parâmetros da query string (request.query)
  // A query string é representada após o "?" na URL. Exemplo: "?name=babe&age=56"
  console.log(request.query);

  // Imprime no console os cabeçalhos da requisição (request.headers)
  // request.headers contém informações sobre a requisição, como tipo de conteúdo, autorizações, etc.
  // Exemplo de dados: { "content-type": "application/json", "user-agent": "Mozilla/5.0", ... }
  console.log(request.headers);

  // Envia uma resposta com status 200 (OK) e um objeto JSON indicando que a operação foi bem-sucedida
  // O código de status 200 indica que a requisição foi processada com sucesso
  response.status(200).json({ success: true }); // Corrigido de "sucess" para "success"
});

// Cria o servidor e faz ele escutar na porta 4000
// O servidor começa a receber requisições HTTP na porta 4000
app.listen(4000);
