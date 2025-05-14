# API de Cadastro de Usuários

Essa API permite criar novos usuários em um banco de dados MariaDB utilizando Node.js com Express. O projeto tem como objetivo demonstrar a conexão entre um backend e um banco de dados de forma simples e eficiente.

## Como Funciona

### Conexão ao Banco de Dados

- Utiliza um pool de conexões para gerenciar interações com o banco MariaDB.
- Conexões são reutilizadas para otimizar desempenho e evitar sobrecarga.

### Rotas Disponíveis

- **POST /user**: Adiciona um novo usuário ao banco de dados.

### Processo de Criação

1. Recebe `name`, `email` e `password` no corpo da requisição.
2. A senha é criptografada antes de ser armazenada no banco para maior segurança.

## Como Usar

### Instalar Dependências

Execute o seguinte comando:

```bash
npm install
```

#### Dependências principais:

- **express**: Framework para construção do servidor.
- **mysql2**: Biblioteca para conectar ao MariaDB.
- **bcryptjs**: Para criptografar senhas.
- **uuid**: Para gerar identificadores únicos.
- **dotenv**: Para carregar variáveis de ambiente.

### Configurar o Banco de Dados

1. Certifique-se de que o MariaDB está rodando.
2. Crie um banco chamado `api-yt-project`.
3. Execute o seguinte comando SQL para criar a tabela de usuários:

```sql
CREATE TABLE users (
  user_id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

### Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e defina as credenciais do banco:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=api-yt-project
DB_PORT=3306
PORT=4000
```

### Rodar o Servidor

Inicie o servidor com:

```bash
npm start
```

O servidor estará disponível em: [http://localhost:4000](http://localhost:4000)

### Testar a API

Faça uma requisição **POST** para `http://localhost:4000/api/user` com o seguinte corpo JSON:

```json
{
  "name": "Seu Nome",
  "email": "seuemail@example.com",
  "password": "suasenha"
}
```

#### Resposta esperada:

```json
{
  "success": true,
  "message": "Usuário criado com sucesso"
}
```

## Explicação do Código

### 1. Importação de Pacotes

- **express**: Para criar o servidor e definir rotas.
- **mysql2**: Para interagir com o banco de dados.
- **uuid**: Para gerar um ID único para cada usuário.
- **bcryptjs**: Para criptografar senhas.
- **dotenv**: Para carregar configurações sensíveis a partir do `.env`.

### 2. Configuração do Banco de Dados

- As credenciais são carregadas de variáveis de ambiente.
- Usa-se um **pool de conexões** para eficiência.

### 3. Criação do Servidor

- O `express.json()` é usado para processar requisições JSON.
- Define-se a rota `POST /user` para cadastro de novos usuários.

### 4. Cadastro de Usuário

- O servidor recebe `name`, `email` e `password` do corpo da requisição.
- A senha é criptografada com **bcryptjs**.
- Os dados são inseridos no banco.
- O servidor responde confirmando a criação ou informando erro.

### 5. Inicialização do Servidor

- O servidor escuta a **porta 4000** (ou conforme definido no `.env`).
- Exibe `"Servidor rodando na porta 4000"` no terminal.

## Melhorias Futuras

- Implementação de **Express Router** para organizar melhor as rotas.
- Adição de **CORS** para permitir acesso externo seguro.
- Introdução de **JWT Authentication** para autenticação de usuários.
- Middleware de **tratamento de erros** para respostas padronizadas.
- **Testes automatizados** usando Jest e Supertest.
