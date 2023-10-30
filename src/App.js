import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App() {

  const [todoList, setTodoList] = React.useState([]);

 function addTodo (newTodo) {
    setTodoList([...todoList, ...newTodo]);
 }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo}/>
      <p>
        
      </p>
      <TodoList todoList={todoList}/>
    </div>
  );
};

export default App;
