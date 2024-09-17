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
    res.status(200).json({message:"Tarea eliminada"})
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

    todosDB.push(newTodo)

    res.status(201).json({message:"Tarea agregada"})

  } catch (error) {
    console.log("No se pudo eliminar tarea", error)
  }
}

export const updateTodoCtrl = (req,res) => {

  const {todoNewName,todoNewState} = req.body

  const id = +req.params.id

  const newTodoUpdate = {
      id: id,
      title: todoNewName,
      completed: todoNewState,
      owner: req.user.id
  }


  console.log(newTodoUpdate);

  const index = todosDB.findIndex((tarea) => tarea.id === id);

  todosDB.splice(index,1,newTodoUpdate)

  res.status(200).json({message:"Tarea actualizada"})
}