import React from "react";

import * as styles from "./styles";

export interface TodoProps {
  id: string;
  text: string;
  isCompleted: boolean;

  setPending: (id: string) => void;
  setComplete: (id: string) => void;
  destroy: (id: string) => void;
}

export const Todo: React.FunctionComponent<TodoProps> = ({
  id,
  isCompleted,
  text,
  destroy,
  setPending,
  setComplete
}) => (
  <styles.Container isCompleted={isCompleted}>
    <span onClick={() => (isCompleted ? setPending(id) : setComplete(id))}>
      {text}
    </span>
    <button onClick={() => destroy(id)}>X</button>
  </styles.Container>
);
