# Sistema de Gerenciamento de Usuários e Vídeos

Este projeto é um sistema desenvolvido em **Node.js** com **TypeScript** para gerenciamento de usuários e vídeos. Ele permite o cadastro e autenticação de usuários, criação de vídeos e a listagem de vídeos de um usuário específico.

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **MySQL** (via `mysql2`)
- **bcrypt** (para hash de senhas)
- **jsonwebtoken** (para autenticação)
- **dotenv** (para variáveis de ambiente)

## Estrutura do Projeto

```plaintext
project/
├── src/
│   ├── config/
│   │   └── config.ts       # Configurações do banco de dados e JWT
│   ├── routes/
│   │   ├── userRoutes.ts   # Rotas relacionadas a usuários
│   │   └── videoRoutes.ts  # Rotas relacionadas a vídeos
│   ├── services/
│   │   ├── userService.ts  # Lógica de negócio para usuários
│   │   └── videoService.ts # Lógica de negócio para vídeos
│   └── server.ts           # Arquivo principal do servidor
├── .env                    # Variáveis de ambiente
├── package.json            # Configuração do projeto e dependências
├── package-lock.json       # Controle de versão das dependências
└── tsconfig.json           # Configurações do TypeScript
```

## Instalação e Configuração

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
JWT_SECRET=mySecretKey12345
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=88296998Xp*
DB_NAME=api-yt-project
DB_PORT=3306
```

### 4. Rodar o Servidor

Para iniciar o servidor:

```bash
npm run dev
```

## Endpoints

### **Usuários**

#### 1. Cadastro de Usuário

- **Endpoint**: `POST   localhost:3000/user/sign-up`
- **Descrição**: Cadastra um novo usuário.
- **Exemplo de Corpo da Requisição**:
  ```json
  {
    "name": "cabeção",
    "email": "cabecao@example.com",
    "password": "88296998"
  }
  ```

#### 2. Login de Usuário

- **Endpoint**: `POST   localhost:3000/user/login`
- **Descrição**: Realiza login e retorna um token JWT.
- **Exemplo de Corpo da Requisição**:
  ```json
  {
    "email": "luis_1988@outlook.com",
    "password": "88296998"
  }
  ```

### **Vídeos**

#### 1. Criação de Vídeo

- **Endpoint**: `POST   localhost:3000/video/create-video`
- **Descrição**: Cria um vídeo associado a um usuário.
- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "user_id": "494dee91-d4ce-4765-8b73-ef35024fe5ce",
    "title": "Meu Vídeo",
    "description": "Descrição do vídeo"
  }
  ```

#### 2. Listar Vídeos

- **Endpoint**: `GET   localhost:3000/video/get-videos`
- **Descrição**: Lista todos os vídeos associados a um usuário.
- **Exemplo de Corpo da Requisição**:
  ```json
  {
    "user_id": "494dee91-d4ce-4765-8b73-ef35024fe5ce"
  }
  ```

## Banco de Dados

### Tabelas

#### 1. Tabela `users`

- **Colunas**:
  - `id` (UUID, PK)
  - `name` (VARCHAR)
  - `email` (VARCHAR, UNIQUE)
  - `password` (VARCHAR)

#### 2. Tabela `videos`

- **Colunas**:
  - `video_id` (UUID, PK)
  - `user_id` (UUID, FK)
  - `title` (VARCHAR)
  - `description` (TEXT)

## Scripts Disponíveis

- **Iniciar o Servidor**:
  ```bash
  npm run dev
  ```

#### 3. Buscar Vídeos por Título

- **Endpoint**: `GET  localhost:3000/video/search-videos`
- **Descrição**: Busca vídeos com títulos semelhantes ao termo fornecido.
- **Parâmetros de Query**:
  - `search` (string): O termo de busca.
- **Exemplo de Query**:
  ```
  /video/search-videos?search=meu video
  ```
- **Resposta**:
  ```json
  {
    "message": "Vídeos retornados com sucesso",
    "videos": [
      {
        "video_id": "123e4567-e89b-12d3-a456-426614174000",
        "user_id": "321e4567-e89b-12d3-a456-426614174000",
        "title": "Meu Vídeo",
        "description": "Descrição do vídeo"
      }
    ]
  }
  ```

## Banco de Dados

### Tabelas

#### 1. Tabela `users`

- **Colunas**:
  - `id` (UUID, PK)
  - `name` (VARCHAR)
  - `email` (VARCHAR, UNIQUE)
  - `password` (VARCHAR)

#### 2. Tabela `videos`

- **Colunas**:
  - `video_id` (UUID, PK)
  - `user_id` (UUID, FK)
  - `title` (VARCHAR)
  - `description` (TEXT)

## Scripts Disponíveis

- **Iniciar o Servidor**:
  ```bash
  npm run dev
  ```

## Observações

- Certifique-se de que o MySQL está configurado e rodando.
- Utilize variáveis de ambiente seguras para produção.

## Autor

Luis Carlos
