import React from "react";

import { Todos } from "./Todos";
import { Container } from "./styles";

export interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => (
  <Container>
    <h1>Your Todos</h1>
    <Todos />
  </Container>
);
