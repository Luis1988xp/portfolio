import { Router } from "express";
import { createVideo, getVideos, searchVideos } from "../services/videoService";
import login from "../middleware/login"; // Corrigindo a importação

const router = Router();

// Rota para criação de vídeos
router.post("/create-video", login, createVideo);

// Rota para listagem de vídeos
router.get("/get-videos", getVideos);

// Rota para busca de vídeos
router.get("/search-videos", searchVideos);

export default router;
