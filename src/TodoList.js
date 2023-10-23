import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Read the book Road to React",
  },
  {
    id: 2,
    title: "See videos from Learn the App",
  },
  {
    id: 3,
    title: "Submit my assignment",
  },
  {
    id: 4,
    title: "Practice JavaScript",
  },
];

function TodoList () {

    return (
        <ul>
              {todoList.map((todoItem) => (
            <TodoListItem key={todoItem.id} todo={todoItem}/>
          ))}
        </ul>
    );
};

export default TodoList;