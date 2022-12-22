import { read, create, remove, update } from "./todos";

const dbAddTodo = (todo) => {
  return async (dispatch) => {
    const addTodo = async () => {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    };
    try {
      const { data } = await addTodo();
      dispatch(create(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const dbDeleteTodo = (todoId) => {
  return async (dispatch) => {
    const deleteTodo = async () => {
      const res = await fetch(`http://localhost:3000/todo?id=${todoId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      return data;
    };
    try {
      const { data } = await deleteTodo();
      dispatch(remove(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const dbReadTodos = () => {
  return async (dispatch) => {
    const todosData = async () => {
      const res = await fetch("http://localhost:3000/todo");
      const data = await res.json();
      return data;
    };
    try {
      const data = await todosData();
      dispatch(read(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const dbUpdateTodo = (todo) => {
  return async (dispatch) => {
    const updateTodo = async () => {
      const res = await fetch("http://localhost:3000/todo", {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    };
    try {
      const { data } = await updateTodo();
      dispatch(update(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export { dbAddTodo, dbDeleteTodo, dbReadTodos, dbUpdateTodo };
