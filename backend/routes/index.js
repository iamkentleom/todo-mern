import { Router } from "express";
import todo from "./todo";

const routes = Router();

routes.get("/", (req, res) => {
  res.send({ data: "Welcome to the Todo API", error: null });
});

routes.use("/todo", todo);

export default routes;
