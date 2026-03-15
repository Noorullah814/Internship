import { useState } from "react";

function TodoItem({
  id,
  text,
  completed,
  deleteTodo,
  toggleComplete,
  updateTodo
}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleUpdate = () => {
    if (editText.trim() === "") return;

    updateTodo(id, editText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">

      {isEditing ? (

        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button className="seve-btn" onClick={handleUpdate}>
            Save
          </button>
        </>

      ) : (

        <>
          <span
            onClick={() => toggleComplete(id)}
            style={{
              textDecoration: completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {text}
          </span>

          <div className="btn-container">

            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>

          </div>
        </>

      )}

    </li>
  );
}

export default TodoItem;
