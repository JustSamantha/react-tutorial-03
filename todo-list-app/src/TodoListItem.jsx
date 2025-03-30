export default function TodoListItem({ todo, onCompletedClicked, onDeleteClick }) {
  return(
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted 
        ? <button onClick={() => onDeleteClick(todo.text)}>Delete Item</button>
        : <button onClick={() => onCompletedClicked(todo.text)}>Mark as Completed</button>
      }
    </div>
  );
}