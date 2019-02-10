import { Observable } from "rxjs";

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface AddTodoAction {
  type: "ADD_TODO";
  text: string;
}

export interface SetTodoCompletedAction {
  type: "SET_TODO_COMPLETED";
  todoId: string;
}

export interface SetTodoDoingAction {
  type: "SET_TODO_DOING";
  todoId: string;
}

export interface DeleteTodoAction {
  type: "DELETE_TODO";
  todoId: string;
}

export interface Submit {
  type: "SUBMIT";
}

export type Action =
  | AddTodoAction
  | SetTodoCompletedAction
  | SetTodoDoingAction
  | DeleteTodoAction
  | Submit;

export interface TodoStore {
  state$: Observable<Todo[]>;
  create: (text: string) => void;
  delete: (id: string) => void;
  setAsComplete: (id: string) => void;
  setAsDoing: (id: string) => void;
  submit: () => void;
}
