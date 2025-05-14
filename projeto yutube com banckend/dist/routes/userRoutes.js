"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userService_1 = require("../services/userService"); // Importação dos serviços de usuário
const router = (0, express_1.Router)();
// Rota para cadastro de usuário
router.post("/sign-up", userService_1.signUp);
// Rota para login de usuário
router.post("/login", userService_1.login);
exports.default = router;
