# Servidor Node.js com Express

Este projeto é um exemplo de servidor básico utilizando Node.js e Express. Ele demonstra o processamento de requisições HTTP, o envio de respostas em JSON e a manipulação de parâmetros por meio de rotas, query strings, corpo da requisição e headers.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Endpoints da API](#endpoints-da-api)
- [Instalação e Execução](#instalação-e-execução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Licença](#licença)
- [Contato](#contato)

## Visão Geral

Esta aplicação é um servidor simples construído com Node.js e Express, ideal para entender como lidar com diferentes tipos de requisições HTTP e extrair dados de várias fontes (URL, query, corpo e headers).

## Funcionalidades

- **Processamento de Requisições HTTP:** Suporte para métodos GET e POST.
- **Respostas em JSON:** Todas as respostas são formatadas em JSON para facilitar a integração com clientes e outras APIs.
- **Manipulação de Parâmetros:** Exemplo prático de extração e uso de parâmetros dinâmicos, query strings, corpo de requisições e headers.

## Endpoints da API

### GET `/`

Retorna informações sobre um usuário:

```json
{
  "name": "Luis",
  "age": 35,
  "mora": "Salvador"
}
```

### GET `/users`

Retorna uma lista de usuários:

```json
[
  {
    "message": "Que show da Xuxa é esse?",
    "name": "Luis"
  },
  {
    "age": 35,
    "mora": "Salvador"
  }
]
```

### GET `/userdata/:id/:email`

Exemplo de requisição:

**URL:**

```
/userdata/123/luis@example.com?name=Luis&age=35
```

**Corpo da Requisição (JSON):**

```json
{ "key": "value" }
```

**Cabeçalhos:**

```json
{ "Content-Type": "application/json" }
```

**Resposta:**

```json
{ "success": true }
```

## Instalação e Execução

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Acesse o diretório do projeto:

```bash
cd <nome-do-diretorio>
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm run dev
```

O servidor ficará escutando na porta `4000` (acessível em `http://localhost:4000`).

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de código JavaScript no servidor.
- **Express**: Framework web minimalista para Node.js.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Caso tenha dúvidas ou sugestões, entre em contato:

- **Email:** luis@example.com
- **GitHub:** [github.com/luis](https://github.com/luis)
- **LinkedIn:** [linkedin.com/in/luis](https://linkedin.com/in/luis)
