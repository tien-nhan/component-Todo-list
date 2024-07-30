export function Todo({ item, onEditTodo = () => {}, onDeleteTodo = () => {} }) {
  return (
    <li key={item.id}>
      <span>{item.text}</span>
      <button data-id={item.id} data-text={item.text} onClick={onEditTodo}>
        Edit
      </button>
      <button data-id={item.id} onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  );
}
