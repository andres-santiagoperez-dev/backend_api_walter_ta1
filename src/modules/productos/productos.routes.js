import { Router } from "express";

import * as productoCtr from "./productos.controller.js";


const router = Router();

router.get("/productos", productoCtr.obtenerProductos);
router.get("/productos/:codigo", productoCtr.obtenerProductoCodigo);
router.post("/productos", productoCtr.crearProducto);
router.delete("/productos/:codigo", productoCtr.borrarProducto);
router.put("/productos/:codigo", productoCtr.actualizarProducto);

export default router;