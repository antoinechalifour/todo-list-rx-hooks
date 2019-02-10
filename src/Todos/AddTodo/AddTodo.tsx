import React, { useState, useCallback } from "react";

import * as styles from "./styles";

export interface AddTodoProps {
  addTodo: (text: string) => void;
}

export const AddTodo: React.FunctionComponent<AddTodoProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      addTodo(todo);
      setTodo("");
      e.preventDefault();
    },
    [todo]
  );

  return (
    <styles.Container>
      <form onSubmit={handleSubmit}>
        <styles.Input
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Add something to do..."
        />
      </form>
    </styles.Container>
  );
};
