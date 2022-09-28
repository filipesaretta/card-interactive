import styled from "styled-components";
import complete from "../../assets/images/icon-complete.svg";

interface Props {
  handleShow: () => void;
  handleResetCard: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;

  img {
    width: 80px;
  }

  h1 {
    color: hsl(278, 68%, 11%);
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    color: hsl(279, 6%, 55%);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.75rem;
    width: 320px;
    padding: 1rem 0;
    color: white;
    background-color: hsl(278, 68%, 11%);
    border-radius: 6px;
    cursor: pointer;

    @media (min-width: 576px) {
      width: 450px;
    }
  }
`;

export function ThankYou({ handleShow, handleResetCard }: Props) {
  return (
    <Container>
      <img src={complete} alt="" />
      <h1>Thank You</h1>
      <p>We&apos;ve add your card details</p>
      <button
        onClick={() => {
          handleResetCard();
          handleShow();
        }}
      >
        Add other details
      </button>
    </Container>
  );
}
