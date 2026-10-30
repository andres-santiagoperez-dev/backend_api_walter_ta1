//esto administra la conexion con la base de datos
//usamos la libreria mysql2 para intectartuar con MYSQL
//esta libreria me permite implementar consultas, transacciones,
//procedimientos almacenados etc.
//una mejor opcion es usar un ORM: son libreiras de clases independientes
//del motor de bases de datos, sequelize, prima.



import mysql from "mysql2/promise"; //importamos la liberia

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool
