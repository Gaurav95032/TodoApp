import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoList({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [updateTodoMsg, setUpdateTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, todoCompletion } = useTodo();

  const handleEditSave = () => {
    if (isTodoEditable) {
      if (!updateTodoMsg) return;
      updateTodo(todo.id, { ...todo, todo: updateTodoMsg.trim() });
    }
    setIsTodoEditable(!isTodoEditable);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggleCompleted = () => {
    todoCompletion(todo.id);
  };

  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md rounded-xl p-3 border border-gray-200 dark:border-gray-700">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleToggleCompleted}
        className="w-5 h-5 accent-blue-600"
      />

      <input
        type="text"
        value={updateTodoMsg}
        onChange={(e) => setUpdateTodoMsg(e.target.value)}
        disabled={!isTodoEditable}
        className={`flex-1 bg-transparent outline-none px-2 py-1 rounded transition duration-200
          ${isTodoEditable ? 
            'border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 focus:border-blue-500' : 
            'border-none'}
          ${todo.isCompleted ? 'line-through text-gray-400' : 'text-gray-700 dark:text-gray-200'}
        `}
      />

      <button
        onClick={handleEditSave}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200
          ${isTodoEditable ? 
            'bg-green-500 hover:bg-green-600' : 
            'bg-blue-500 hover:bg-blue-600'
          } text-white shadow-sm`}
      >
        {isTodoEditable ? 'Save' : 'Edit'}
      </button>

      <button
        onClick={handleDelete}
        className="px-3 py-1 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 text-white shadow-sm transition-all duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoList;
