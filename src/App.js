import {useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  useEffect(() => (localStorage.setItem('savedTodoList', JSON.stringify(todoList))), [todoList] );
  
  return [todoList, setTodoList]
};

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

 function addTodo (newTodo) {
    setTodoList([...todoList, newTodo]);
 }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </>
  );
};

export default App;
