import React, { useState } from 'react';

function TodoForm({ addTodo, clearTodos }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue("");
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="todo-input"
                    placeholder="Add Something To Your List" 
                />
                <button type="submit" className="todo-btn">Add</button>
            </form>
            <button onClick={clearTodos} className="clearbtn">Delete List</button>
        </div>
    );
}

export default TodoForm;
