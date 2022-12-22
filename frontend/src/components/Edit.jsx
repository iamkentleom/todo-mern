import { useState } from "react";
import { useDispatch } from "react-redux";
import { dbUpdateTodo } from "../redux/todos-actions";

const Edit = ({ todo, cancel, options }) => {
  const [text, setText] = useState(todo.text);
  const [date, setDate] = useState(todo.date);
  const dispatch = useDispatch();

  const saveChanges = () => {
    dispatch(
      dbUpdateTodo({
        id: todo.id,
        text,
        date,
        completed: todo.completed,
      })
    );
    cancel(false);
    options(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveChanges();
      }}
    >
      <input
        type="text"
        name="text"
        value={text}
        placeholder="type updated todo here"
        className="w-full outline-none bg-transparent px-2 py-1"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-2 flex justify-between items-center">
        <input
          type="date"
          name="date"
          value={date}
          className="text-sm outline-none px-2 py-1 bg-gray-200 rounded-lg"
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="space-x-1">
          <button
            className="text-sm font-medium py-1 px-2 rounded-lg text-red-600 hover:bg-red-100"
            title="cancel editing"
            type="button"
            onClick={() => cancel(false)}
          >
            cancel
          </button>
          <button
            className="text-sm font-medium py-1 px-2 rounded-lg text-emerald-600 hover:bg-emerald-100"
            title="save changes"
            type="submit"
            onClick={saveChanges}
          >
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Edit;
