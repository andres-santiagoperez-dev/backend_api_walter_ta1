import express from "express";
import cors from "cors";
import "dotenv/config";
import rutausuario from "./src/modules/usuario/usuario.routes.js";
const app = express();
const PORT = 4100;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());
app.get("/", (req, res) => {
res.send("¡Hola, mundo");
});
app.use("/api", rutausuario);
app.listen(PORT, () => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});
