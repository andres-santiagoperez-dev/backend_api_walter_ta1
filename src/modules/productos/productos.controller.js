import { productoModel } from "./productos.model.js";

export const obtenerProductos = async (req, res) => {
  try {
    const results = await productoModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};
export const crearProducto = async (req, res) => {
const datos = {
codigo: req.body.codigo,
descripcion: req.body.descripcion,
unidad: req.body.unidad,
costo: req.body.costo,
precio: req.body.precio,
};
try {
const results = await productoModel.create(datos);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error en la insercion:${error}`,
});
}
};
export const borrarProducto = async (req, res) => {
try {
const results = await productoModel.delete(req.params.codigo);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error al eliminar:${error}`,
});
}
};
export const actualizarProducto = async (req, res) => {
try {
const results = await productoModel.update(req.params.codigo, req.body);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error al actualizar ${error}`,
});
}
};
export const obtenerProductoCodigo = async (req,res) => {
  try
  {
    const results = await productoModel.findById(req.params.codigo)
    res.json({results});
  }
  catch (error)
  {
    status:"error";
  }
}