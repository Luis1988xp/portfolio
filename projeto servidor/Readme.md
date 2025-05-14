# Express Server Example

This repository contains a basic example of an Express.js server. The server demonstrates various HTTP methods and request/response handling for learning and prototyping purposes.

## Features

- Basic routing (`GET`, `POST`, `PUT`, `DELETE`).
- Parsing JSON request bodies.
- Handling URL route parameters, query parameters, and headers.
- Structured API responses in JSON format.
- Error handling middleware for improved debugging.

## Endpoints

### 1. `GET /`

**Description**: Responds with a welcome message in JSON format.

#### Response:

```json
{
  "message": "Bem-vindo ao meu servidor",
  "name": "Luis",
  "age": 35,
  "location": "Salvador"
}
```

### 2. `GET /users`

**Description**: Returns a JSON array with user information.

#### Response:

```json
[
  {
    "message": "Que show da Xuxa é esse?",
    "name": "Luis"
  },
  {
    "age": 35,
    "location": "Salvador"
  }
]
```

### 3. `POST /userdata`

**Description**: Accepts a JSON payload in the request body and logs it to the console.

#### Request Example:

```json
{
  "key": "value"
}
```

#### Response:

```json
{
  "success": true
}
```

### 4. `POST /userdata/:id/:email`

**Description**: Handles route parameters, query parameters, and headers.

#### Route Parameters:

- `id`: User ID
- `email`: User email

#### Query Parameters Example:

`/userdata/123/example@gmail.com?name=John&age=30`

#### Request Headers:

- Example: `{ "Content-Type": "application/json" }`

#### Request Body Example:

```json
{
  "data": "sample payload"
}
```

#### Response:

```json
{
  "success": true
}
```

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the server at:
   - `http://localhost:4000/`

## Notes

- This server is configured to listen on **port 4000**.
- Ensure you have **Node.js** and **npm** installed on your machine before running the server.
- The server follows a modular approach for better maintainability.

## Future Improvements

- Implement **Express Router** for better route organization.
- Add **CORS** support for cross-origin requests.
- Introduce **JWT authentication** for secure API access.
- Implement **error handling middleware** for structured error responses.
- Add **unit tests** using Jest and Supertest.

## License

This project is open source and available under the MIT License.
