import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete, updateTodo }) {

  return (
    <ul className="todo-list">

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo}
        />
      ))}

    </ul>
  );
}

export default TodoList;
