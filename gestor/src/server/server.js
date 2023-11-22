import mysql from 'mysql2/promise';
import { corsMiddleware } from '../app/cors/cors.js';
import { validatePartialTask, validateTask } from '../app/schemas/schema.js';
import express, { json, query } from 'express';
// Configuracion para conectarse a la DB
const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'banana159',
  database: 'taskdb'
};
const connection = await mysql.createConnection(config);
const app = express();
const PORT = process.env.PORT ?? 2222;
app.use(express.json());
app.use(corsMiddleware());
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
app.get('/task/:id', async(req,res)=>{
  try{
   const id = req.params
   const result = await connection.query('SELECT * FROM tareas WHERE (?)',id)
   res.json(result[0])
   
  }
  catch{console.error('Error al realizar la consulta:',error)}
})
app.post('/task', async (req,res)=>{
  const result = validateTask(req.body) ;
  const newTask = {...result.data}; 
  // problemas con el favorito
  await connection.query('INSERT INTO tareas (titulo, descripcion, prioridad, estado, favorito) VALUES (?, ?, ?, ?, ?)',[newTask.titulo ,newTask.descripcion ,newTask.prioridad ,newTask.estado, newTask.favorito])
  res.status(201).json(newTask);
})
app.patch('/task/:id', async (req,res)=>{
  const {id} = req.params;
  const result = validatePartialTask(req.body);
  const taskUpdated = result.data;
  console.log(taskUpdated);
  await connection.query('UPDATE tareas SET ? WHERE (id = ?)',[taskUpdated, id]);
  res.status(201).json(taskUpdated)
})
app.delete('/task/:id', async(req,res)=>{
  const {id} = req.params;
  await connection.query('DELETE FROM tareas WHERE id = ?',[id]);
  res.json("Tarea eliminada")
  //Buscar la forma de recargar o actualizar la pagina cuando se borra una tarea
})
app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto http://localhost:${PORT}`);
});