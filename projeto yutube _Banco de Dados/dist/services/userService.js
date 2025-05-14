"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const config_1 = require("../config/config");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_2 = require("../config/config");
const uuid_1 = require("uuid");
//               Cadastra um novo usuário no sistema
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: "Todos os campos são obrigatórios." });
        return;
    }
    try {
        const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
        const [existingUser] = yield config_1.pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (existingUser.length > 0) {
            res.status(400).json({ message: "E-mail já cadastrado." });
            return;
        }
        yield config_1.pool.query("INSERT INTO users (user_id, name, email, password) VALUES (?, ?, ?, ?)", [(0, uuid_1.v4)(), name, email, hashedPassword]);
        res.status(201).json({ message: "Usuário cadastrado com sucesso." });
    }
    catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }
});
exports.signUp = signUp;
//                  Realiza o login de um usuário
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email e senha são obrigatórios." });
        return;
    }
    try {
        const [rows] = yield config_1.pool.query("SELECT * FROM users WHERE email = ?", [email]);
        const user = rows[0];
        if (!user || !(yield (0, bcrypt_1.compare)(password, user.password))) {
            res.status(401).json({ message: "Credenciais inválidas." });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, config_2.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    }
    catch (error) {
        console.error("Erro ao realizar login:", error);
        res.status(500).json({ message: "Erro ao realizar login." });
    }
});
exports.login = login;
