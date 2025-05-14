import { Router } from "express";
import { signUp, login } from "../services/userService"; // Importação dos serviços de usuário

const router = Router();

// Rota para cadastro de usuário
router.post("/sign-up", signUp);

// Rota para login de usuário
router.post("/login", login);

export default router;
