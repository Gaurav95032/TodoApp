import React, { useState, useEffect } from 'react';
import { TodoContextProvider } from './context';
import { TodoForm, TodoList } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), isCompleted: false, ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const todoCompletion = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, todoCompletion }}
    >
      <main className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200 mb-4">
            Todo App
          </h1>
          <TodoForm />
          <div className="space-y-2">
            {todos.map((todo) => (
              <TodoList key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </main>
    </TodoContextProvider>
  );
}

export default App;
