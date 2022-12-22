import { useState } from "react";
import { useDispatch } from "react-redux";
import { dbAddTodo } from "../redux/todos-actions";

const Create = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    text.trim().length && dispatch(dbAddTodo({ text, date }));
    setText("");
    setDate("");
  };

  return (
    <form
      className="border shadow rounded-lg p-4 group focus-within:shadow-lg"
      onSubmit={(e) => {
        e.preventDefault();
        add();
      }}
    >
      <input
        type="text"
        placeholder="type a todo item here"
        className="w-full outline-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className={`w-full mt-4 hidden group-focus-within:grid grid-cols-2`}>
        <div className="self-center relative">
          <label htmlFor="date">date: </label>
          <input
            type="date"
            name="date"
            title="select due date"
            value={date}
            className="outline-none px-2 py-1 bg-gray-100 rounded-lg"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`py-2 w-full text-white rounded-lg ${
            text.trim().length > 0
              ? "bg-emerald-600 hover:bg-emerald-500 "
              : "bg-gray-200 cursor-not-allowed"
          }`}
          onClick={add}
        >
          add todo
        </button>
      </div>
    </form>
  );
};

export default Create;
