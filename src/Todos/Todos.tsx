import React, { useEffect, useRef, useState } from "react";

import Store from "./Store";
import { Todo, TodoStore } from "./types";
import { Todo as TodoItem } from "./Todo";
import { AddTodo } from "./AddTodo";
import * as styles from "./styles";

export interface TodosProps {}

export const Todos: React.FunctionComponent<TodosProps> = () => {
  const store = useRef<TodoStore>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  function getStore() {
    if (!store.current) {
      // @ts-ignore
      store.current = Store();
    }

    return store.current;
  }

  useEffect(() => {
    const subscription = getStore().state$.subscribe(setTodos);

    return () => subscription.unsubscribe();
  }, []);

  return (
    <styles.Container>
      {todos.length === 0 ? (
        <styles.EmptyList>No todos for today!</styles.EmptyList>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <TodoItem
                {...todo}
                setComplete={getStore().setAsComplete}
                setPending={getStore().setAsDoing}
                destroy={getStore().delete}
              />
            </li>
          ))}
        </ul>
      )}
      <AddTodo addTodo={getStore().create} />
    </styles.Container>
  );
};
