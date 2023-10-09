import React from 'react';

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

function App() {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              {item.id} {item.title}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default App;
