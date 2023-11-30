import React from 'react';

function AddTodoForm ({onAddTodo}) {

    const [todoTitle, setTodoTitle] = React.useState('');

    function handleTitleChange (e) {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(e) {
        e.preventDefault();
        console.log(todoTitle);
        onAddTodo({ title:todoTitle, id:Date.now() });
        setTodoTitle('');
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id="todoTitle" name="todoTitle" value={todoTitle} onChange={handleTitleChange} />
            <button type='submit'>Add</button>
        </form> 
    );
};

export default AddTodoForm;