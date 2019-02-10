import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  max-height: 80vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;

  background: #fff;

  ul {
    padding: 2rem;
    flex: 1;
    overflow-y: auto;
  }
`;

export const EmptyList = styled.p`
  padding: 2rem;
  opacity: 0.3;
  text-align: center;
`;
