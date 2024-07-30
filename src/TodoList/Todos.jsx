import { Todo } from "./TodoItem";

export function Todos({ data, onDeleteTodo, onEditTodo }) {
  return (
    <ul>
      {data.map((item) => {
        return (
          <Todo
            item={item}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        );
      })}
    </ul>
  );
}
