import styled from "styled-components";

export const Container = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;

  span {
    flex: 1;
    cursor: pointer;
    text-decoration: ${({ isCompleted }) =>
      isCompleted ? "line-through" : "normal"};
    opacity: ${({ isCompleted }) => (isCompleted ? "0.5" : "1")};

    transition: opacity 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: monospace;
  }
`;
