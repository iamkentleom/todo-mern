import { addTodo, deleteTodo, editTodo, getTodo } from "../models/todo";

const create = async (req, res) => {
  const { result, error } = await addTodo({
    text: req.body.text,
    date: req.body.date,
  });
  if (result) res.send({ data: result, error });
  else res.send({ data: null, error });
};

const read = async (req, res) => {
  const { result, error } = await getTodo(req.query.id);
  if (result) res.send({ data: result, error });
  else res.send({ data: null, error });
};

const update = async (req, res) => {
  const { result, error } = await editTodo({
    id: req.body.id,
    text: req.body.text,
    date: req.body.date,
    completed: req.body.completed,
  });
  if (result) res.send({ data: result, error });
  else res.send({ data: null, error });
};

const remove = async (req, res) => {
  const { result, error } = await deleteTodo(req.query.id);
  if (result) res.send({ data: result, error });
  else res.send({ data: null, error });
};

export { create, read, remove, update };
