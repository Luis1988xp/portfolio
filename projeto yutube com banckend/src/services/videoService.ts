import { Request, Response } from "express";
import { pool } from "../config/config";
import { v4 as uuidv4 } from "uuid";

//                Cria um novo vídeo associado a um usuário
export const createVideo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, description, user_id } = req.body;

  if (!title || !description || !user_id) {
    res.status(400).json({
      success: false,
      message: "Título, descrição e ID do usuário são obrigatórios",
    });
    return;
  }

  try {
    await pool.query(
      "INSERT INTO videos (video_id, user_id, title, description) VALUES (?, ?, ?, ?)",
      [uuidv4(), user_id, title, description]
    );

    res.status(201).json({
      success: true,
      message: "Vídeo criado com sucesso",
    });
  } catch (error) {
    console.error("Erro na criação do vídeo:", error);
    res.status(500).json({
      success: false,
      message: "Erro na criação do vídeo",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};

//                 Lista os vídeos de um usuário específico
export const getVideos = async (req: Request, res: Response): Promise<void> => {
  const { user_id } = req.body;

  if (!user_id) {
    res.status(400).json({
      success: false,
      message: "ID do usuário é obrigatório",
    });
    return;
  }

  try {
    const [rows]: any = await pool.query(
      "SELECT * FROM videos WHERE user_id = ?",
      [user_id]
    );

    res.status(200).json({
      success: true,
      message: "Vídeos retornados com sucesso",
      videos: rows,
    });
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar vídeos",
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
};

//                        pesquisa do video por alguma palavra associada

export const searchVideos = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { search } = req.query;

  // Valida se o termo de busca foi fornecido
  if (!search) {
    res.status(400).json({ error: "O termo de busca é obrigatório." });
    return;
  }

  try {
    // Consulta SQL para buscar vídeos com título semelhante ao termo fornecido
    const [results]: any = await pool.query(
      "SELECT * FROM videos WHERE title LIKE ?",
      [`%${search}%`]
    );

    res.status(200).json({
      message: "Vídeos retornados com sucesso",
      videos: results,
    });
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    res.status(500).json({
      error: "Erro ao buscar os vídeos.",
    });
  }
};
