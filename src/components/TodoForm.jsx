import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState(''); 
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;

        addTodo({ todo: todo});
        setTodo('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 w-full max-w-md bg-white shadow-lg rounded-2xl p-3 border border-gray-200"
        >
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 bg-transparent outline-none px-3 py-2 text-gray-700 placeholder-gray-400"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
