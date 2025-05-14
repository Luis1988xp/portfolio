import { Request, Response } from "express";
import { pool } from "../config/config";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";
import { v4 as uuidv4 } from "uuid";

//               Cadastra um novo usuário no sistema
export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Todos os campos são obrigatórios." });
    return;
  }

  try {
    const hashedPassword = await hash(password, 10);

    const [existingUser]: any = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUser.length > 0) {
      res.status(400).json({ message: "E-mail já cadastrado." });
      return;
    }

    await pool.query(
      "INSERT INTO users (user_id, name, email, password) VALUES (?, ?, ?, ?)",
      [uuidv4(), name, email, hashedPassword]
    );

    res.status(201).json({ message: "Usuário cadastrado com sucesso." });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ message: "Erro ao cadastrar usuário." });
  }
};

//                  Realiza o login de um usuário
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email e senha são obrigatórios." });
    return;
  }

  try {
    const [rows]: any = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    const user = rows[0];

    if (!user || !(await compare(password, user.password))) {
      res.status(401).json({ message: "Credenciais inválidas." });
      return;
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ message: "Erro ao realizar login." });
  }
};
