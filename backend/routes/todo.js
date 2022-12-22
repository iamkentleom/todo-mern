import { Router } from "express";
import { create, read, remove, update } from "../controllers/todos";

const todo = Router();

// get todos
todo.get("/", read);

// add todos
todo.post("/", create);

// edit todos
todo.put("/", update);

// delete todos
todo.delete("/", remove);

export default todo;
