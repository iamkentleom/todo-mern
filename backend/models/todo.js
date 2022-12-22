import { ObjectId } from "mongodb";
import { database } from "../db";

const addTodo = async ({ text, date }) => {
  const todos = database.collection("todos");
  const todo = {
    text,
    date: date ? date : "",
    completed: false,
  };
  try {
    const result = await todos.insertOne(todo);
    if (result && result.acknowledged) {
      const { _id, ...temp } = todo;
      return {
        result: { id: result.insertedId, ...temp },
        error: null,
      };
    }
    throw "UNABLE_TO_ADD_TODO";
  } catch (error) {
    console.log(error);
    return { result: null, error };
  }
};

const deleteTodo = async (id) => {
  const todos = database.collection("todos");
  try {
    const result = await todos.deleteOne({ _id: ObjectId(id) });
    if (result && result.deletedCount) return { result: id, error: null };
    throw "UNABLE_TO_DELETE_TODO";
  } catch (error) {
    console.log(error);
    return { result: null, error };
  }
};

const editTodo = async ({ id, text, date, completed }) => {
  const todos = database.collection("todos");
  const { result: old, error: err } = await getTodo(id);
  if (err) throw err;
  const doc = {
    text: text || old[0].text,
    date: date || old[0].date,
    completed: completed !== undefined ? completed : old[0].completed,
  };
  try {
    const result = await todos.updateOne(
      { _id: ObjectId(id) },
      { $set: doc },
      {}
    );
    if (result.acknowledged) {
      return { result: { id, ...doc }, error: null };
    }
    throw "UNABLE_TO_UPDATE_TODO";
  } catch (error) {
    console.log(error);
    return { result: null, error };
  }
};

const getTodo = async (id) => {
  const todos = database.collection("todos");
  try {
    const result = await todos
      .aggregate([
        {
          $project: {
            _id: 0,
            id: "$_id",
            text: 1,
            date: 1,
            completed: 1,
          },
        },
        {
          $match: id
            ? {
                id: ObjectId(id),
              }
            : {},
        },
      ])
      .toArray();
    if (result) return { result, error: null };
    throw "UNABLE_TO_GET_TODOS";
  } catch (error) {
    console.log(error);
    return { result: null, error };
  }
};

export { addTodo, deleteTodo, editTodo, getTodo };
