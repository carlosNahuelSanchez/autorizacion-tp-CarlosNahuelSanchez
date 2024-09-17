import { Router } from "express";
import { AddTodoCtrl, deleteTodosCtrl, getAllTodosCtrl, updateTodoCtrl } from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);

todosRouter.delete("/:id", validarJwt, deleteTodosCtrl);

todosRouter.post("/", validarJwt, AddTodoCtrl)

todosRouter.put("/:id", validarJwt, updateTodoCtrl)

export { todosRouter };
