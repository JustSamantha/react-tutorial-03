import { useState } from 'react';
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: 'Take out the garbage', isCompleted: true},
    { text: 'Make dinner', isCompleted: true}
  ]);
  const [incompletTodos, setinCompletTodos] = useState([
    { text: 'Paint the house', isCompleted: false}
  ]);
  return (
    <>
    <TodoList completedTodos={completedTodos} incompleteTodos={incompletTodos}/>
    </>
  );
}

export default App
