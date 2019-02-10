import uuid from "uuid";

import { Todo, Action } from "./types";

export const todoReducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: uuid.v4(),
          text: action.text,
          isCompleted: false
        }
      ];

    case "DELETE_TODO":
      return todos.filter(todo => todo.id !== action.todoId);

    case "SET_TODO_COMPLETED":
      return todos.map(todo => {
        if (todo.id === action.todoId) {
          return {
            ...todo,
            isCompleted: true
          };
        }

        return todo;
      });

    case "SET_TODO_DOING":
      return todos.map(todo => {
        if (todo.id === action.todoId) {
          return {
            ...todo,
            isCompleted: false
          };
        }

        return todo;
      });

    default:
      return todos;
  }
};
