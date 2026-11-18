import mysql from "mysql2/promise"; // importamos la libreria
//creamos una constante POOL
const pool = mysql.createPool({
  host:  process.env.APP_HOST || "localhost",
  port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
  user: process.env.MYSQL_ADDON_USER || "root",
  password: process.env.MYSQL_ADDON_PASSWORD || "",
  database: process.env.MYSQL_ADDON_DB || "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});
export default pool;