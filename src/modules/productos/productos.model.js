import db from "../../config/dbconexion.js";

export const productoModel = {
  findALL: async () => {
    const sql = "SELECT * FROM productos ORDER BY descripcion";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (codigo) => {
    const sql = "SELECT * FROM productos WHERE codigo=?";
  //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },

  delete: async (codigo) => {
    const sql = "DELETE FROM productos WHERE codigo=?";
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },

  create: async (data) => {
    let codigo = data.codigo;
    console.log(data);
  // validamos que el email no exista ! , el usuario lo validaremos por el codigo
    const [codigoExiste] = await db.query(
    "SELECT * FROM productos WHERE codigo = ?",
    [codigo],
    );
    if (codigoExiste.length > 0) {
      throw new Error("El codigo ya está registrado");
      }
    const productoNuevo = {
      codigo: data.codigo,
      descripcion: data.descripcion,
      unidad: data.unidad,
      costo: data.costo,
      precio: data.precio,
    };
    const sql = "INSERT INTO productos SET ?";
    const [rows] = await db.query(sql, [productoNuevo]);
    return rows;
  },
  update: async (codigo, data) => {
    const sql = "UPDATE producto SET ? WHERE codigo = ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, codigo]);
    return rows;
  },
};
