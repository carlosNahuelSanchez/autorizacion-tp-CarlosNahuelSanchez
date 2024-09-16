import { database } from "../db/database.js";

let todosDB = database.todos

export const getAllTodosCtrl = (req, res) => {

  const user = req.user.id

  const todos = todosDB.filter((tarea => tarea.owner === user));

  res.json({ todos });
};

export const deleteTodosCtrl = (req,res) => {
  try {
    const id = +req.params.id
    todosDB = todosDB.filter((tarea)=> tarea.id != id)
  } catch (error) {
    console.error("No se puedo eliminar",error)
  }
}

export const AddTodoCtrl = (req,res) => {
  try {
    const {todoName,todoState} = req.body
    const newId = database.todos.length + 1;
    
    const newTodo = {
      id: newId,
      title: todoName,
      completed: todoState,
      owner: req.user.id
    }

    console.log(newTodo)

    todosDB.push(newTodo)

  } catch (error) {
    console.log("No se pudo eliminar tarea", error)
  }
}