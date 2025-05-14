"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videoService_1 = require("../services/videoService");
const login_1 = __importDefault(require("../middleware/login")); // Corrigindo a importação
const router = (0, express_1.Router)();
// Rota para criação de vídeos
router.post("/create-video", login_1.default, videoService_1.createVideo);
// Rota para listagem de vídeos
router.get("/get-videos", videoService_1.getVideos);
// Rota para busca de vídeos
router.get("/search-videos", videoService_1.searchVideos);
exports.default = router;
