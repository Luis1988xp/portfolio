import { pool } from "./config/config";

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexão com o banco de dados bem-sucedida!");
    connection.release();
  } catch (error) {
    console.error(
      "Erro ao conectar ao banco de dados:",
      error instanceof Error ? error.message : error
    );
  } finally {
    process.exit();
  }
})();
