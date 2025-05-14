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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchVideos = exports.getVideos = exports.createVideo = void 0;
const config_1 = require("../config/config");
const uuid_1 = require("uuid");
//                Cria um novo vídeo associado a um usuário
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, user_id } = req.body;
    if (!title || !description || !user_id) {
        res.status(400).json({
            success: false,
            message: "Título, descrição e ID do usuário são obrigatórios",
        });
        return;
    }
    try {
        yield config_1.pool.query("INSERT INTO videos (video_id, user_id, title, description) VALUES (?, ?, ?, ?)", [(0, uuid_1.v4)(), user_id, title, description]);
        res.status(201).json({
            success: true,
            message: "Vídeo criado com sucesso",
        });
    }
    catch (error) {
        console.error("Erro na criação do vídeo:", error);
        res.status(500).json({
            success: false,
            message: "Erro na criação do vídeo",
            error: error instanceof Error ? error.message : "Erro desconhecido",
        });
    }
});
exports.createVideo = createVideo;
//                 Lista os vídeos de um usuário específico
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.body;
    if (!user_id) {
        res.status(400).json({
            success: false,
            message: "ID do usuário é obrigatório",
        });
        return;
    }
    try {
        const [rows] = yield config_1.pool.query("SELECT * FROM videos WHERE user_id = ?", [user_id]);
        res.status(200).json({
            success: true,
            message: "Vídeos retornados com sucesso",
            videos: rows,
        });
    }
    catch (error) {
        console.error("Erro ao buscar vídeos:", error);
        res.status(500).json({
            success: false,
            message: "Erro ao buscar vídeos",
            error: error instanceof Error ? error.message : "Erro desconhecido",
        });
    }
});
exports.getVideos = getVideos;
//                        pesquisa do video por alguma palavra associada
const searchVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.query;
    // Valida se o termo de busca foi fornecido
    if (!search) {
        res.status(400).json({ error: "O termo de busca é obrigatório." });
        return;
    }
    try {
        // Consulta SQL para buscar vídeos com título semelhante ao termo fornecido
        const [results] = yield config_1.pool.query("SELECT * FROM videos WHERE title LIKE ?", [`%${search}%`]);
        res.status(200).json({
            message: "Vídeos retornados com sucesso",
            videos: results,
        });
    }
    catch (error) {
        console.error("Erro ao buscar vídeos:", error);
        res.status(500).json({
            error: "Erro ao buscar os vídeos.",
        });
    }
});
exports.searchVideos = searchVideos;
