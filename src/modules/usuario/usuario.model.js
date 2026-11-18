import db from "../../config/dbconexion.js";
import bcrypt from "bcryptjs";

export const UserModel = {
  findALL: async (page, limit) => {
    const sql ="SELECT * FROM usuario ORDER BY apellidos, id_usuario LIMIT ? OFFSET ?";
    const [rows] = await db.query(sql, [limit, (page - 1) * limit]);
    const [count] = await db.query("SELECT COUNT(*) AS total FROM usuario");
  return { results: rows, total: count[0].total };
  },

  findById: async (id) => {
    const sql = "SELECT * FROM usuario WHERE id_usuario=?";
  //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  delete: async (id) => {
    const sql = "DELETE FROM usuario WHERE id_usuario=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    let email = data.email;
    console.log(data);
  // validamos que el email no exista ! , el usuario lo validaremos por el
    email
    const [emailExiste] = await db.query(
    "SELECT * FROM usuario WHERE email = ?",
    [email],
    );
    if (emailExiste.length > 0) {
      throw new Error("El email ya está registrado");
      }
    const userNuevo = {
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      ciudad: data.ciudad,
      estado: data.estado,
      password: bcrypt.hashSync(data.password, 11), // Encriptar la contraseña
    };
    const sql = "INSERT INTO usuario SET ?";
    const [rows] = await db.query(sql, [userNuevo]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE usuario SET ? WHERE id_usuario = ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
