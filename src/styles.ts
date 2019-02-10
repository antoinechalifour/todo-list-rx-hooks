import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);

  h1 {
    color: #fff;
    margin: 1rem auto;
    font-size: 2rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.33);
  }
`;
