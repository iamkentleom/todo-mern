import { useDispatch } from "react-redux";
import moment from "moment";
import { useState } from "react";
import Edit from "./Edit";
import { dbDeleteTodo, dbUpdateTodo } from "../redux/todos-actions";

const Todo = ({ id, text, completed, date }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const toggleCompleted = () => {
    dispatch(
      dbUpdateTodo({
        id,
        text,
        completed: !completed,
        date,
      })
    );
  };
  const calendarOptions = {
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "ddd, MMM DD",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] ddd, MMM DD",
    sameElse: "MMMM DD, YYYY",
  };

  return (
    <div className="px-4 py-3 my-2 rounded-lg border hover:bg-gray-100 cursor-pointer">
      {!editMode ? (
        <>
          <div className="flex space-x-4">
            <input
              checked={completed}
              type="checkbox"
              className="w-6 h-6 border-0 rounded-[50%] self-start accent-emerald-600"
              onChange={toggleCompleted}
            />
            <div
              className="w-full self-start"
              title="click to show options"
              onClick={() => setShowOptions(!showOptions)}
            >
              <p className={`${completed ? "line-through text-gray-500" : ""}`}>
                {text}
              </p>
              {date && (
                <p
                  className={`text-xs ${
                    moment().isAfter(date, "day")
                      ? "text-red-400"
                      : "text-gray-600"
                  }`}
                >
                  {moment(date).calendar(null, calendarOptions)}
                </p>
              )}
            </div>
          </div>
          <div
            className={`${
              showOptions ? "flex items-center justify-end" : "hidden"
            } space-x-1 w-full`}
          >
            <button
              className="text-sm font-medium py-1 px-2 rounded-lg text-yellow-600 hover:bg-yellow-100"
              title="edit todo item"
              onClick={() => setEditMode(true)}
            >
              edit
            </button>
            <button
              className="text-sm font-medium py-1 px-2 rounded-lg text-red-600 hover:bg-red-100"
              title="delete todo item"
              onClick={() => dispatch(dbDeleteTodo(id))}
            >
              delete
            </button>
          </div>
        </>
      ) : (
        <Edit
          todo={{ id, text, date, completed }}
          cancel={setEditMode}
          options={setShowOptions}
        />
      )}
    </div>
  );
};

export default Todo;
