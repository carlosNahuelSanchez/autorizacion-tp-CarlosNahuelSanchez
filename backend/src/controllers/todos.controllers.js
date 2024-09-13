import { database } from "../db/database.js";

const todosDB = database.todos

export const getAllTodosCtrl = (req, res) => {

  const user = req.user.id

  const todos = todosDB.filter((tarea => tarea.owner === user));

  res.json({ todos });
};

export const addTodosCtrl = (req,res) => {

  todosDB.push

}
