import { useSelector } from 'react-redux';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import todosStore from './todos-mobx';
import { observer } from 'mobx';

const TodoList = observer(() => {
  const todos = useSelector(state => state.todos.value);
  
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      <h3>Completed:</h3>
      {todosStore.todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
      {todosStore.todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  )
})

export default TodoList;