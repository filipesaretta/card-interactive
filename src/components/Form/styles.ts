import styled from "styled-components";

export const Details = styled.div`
  max-width: 450px;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: center;

  form {
    width: 100%;
    padding: 1rem;

    .alert {
      border-color: hsl(0, 100%, 66%);
    }
    .errors {
      padding-left: 0.3rem;
      padding-top: 0.2rem;
      color: hsl(0, 100%, 66%);
      line-height: 1.2;
    }

    label[for="ExpDate"] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-right: 2rem;

      span {
        grid-column: 1 / -1;
      }

      input {
        grid-row: 2;
        max-width: 4rem;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      span {
        padding-top: 0.5rem;
        padding-bottom: 0.75rem;
      }
    }

    input {
      border: 1px solid hsl(270, 3%, 87%);
      border-radius: 6px;
      padding: 0.5rem 0.75rem;
      color: #160f1f;
      width: 100%;

      &::placeholder {
        color: hsl(270, 3%, 87%);
      }

      &:focus {
        outline: 2px solid hsl(278, 68%, 11%);
      }
    }

    div {
      display: flex;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.75rem;
      width: 100%;
      padding: 1rem 0;
      color: white;
      background-color: hsl(278, 68%, 11%);
      border-radius: 6px;
      cursor: pointer;
      transition: outline 300ms ease-in-out;

      &:focus,
      &:hover {
        outline: 3px solid hsl(278, 68%, 11%);
        outline-offset: 0.2rem;
      }
    }
  }
`;
