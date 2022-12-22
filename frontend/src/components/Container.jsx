import { useSelector } from "react-redux";
import Todo from "./Todo";
import Empty from "./Empty";

const Container = () => {
  const { data: todos } = useSelector((state) => state.todos);

  return (
    <div className="w-full py-6">
      {todos.length > 0 ? (
        todos
          .filter((el) => !el.completed)
          .map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              date={todo.date}
              completed={todo.completed}
            />
          ))
      ) : (
        <Empty />
      )}

      {todos.filter((el) => el.completed).length > 0 ? (
        <div className="py-2">
          <span className="px-3 py-1 rounded-lg bg-emerald-100 text-xs">
            completed
          </span>
        </div>
      ) : (
        ""
      )}
      {todos
        .filter((el) => el.completed)
        .map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            date={todo.date}
            completed={todo.completed}
          />
        ))}
    </div>
  );
};

export default Container;
