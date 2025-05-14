import express from "express";
import userRoutes from "./routes/userRoutes";
import videoRoutes from "./routes/videoRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use("/user", userRoutes);
app.use("/video", videoRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
