import mysql from 'mysql2/promise';
// Configuracion para conectarse a la DB
const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'banana159',
  database: 'taskdb'
};
const connection = await mysql.createConnection(config);
import express from 'express';
const app = express();
const PORT = process.env.PORT ?? 2222;

// Define rutas o lógica del backend aquí
app.get('/task', async (req, res) => {
  try {
    const [tareas] = await connection.query('SELECT * FROM tareas');
    res.json(tareas);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error al obtener las tareas');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto http://localhost:${PORT}`);
});
//Crear la base de datos
//Conectar a la bd
//importar mysql2
//crear una id por cada tarea