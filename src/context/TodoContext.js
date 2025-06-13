import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo 1",
            isCompleted : false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    todoCompletion: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;

  