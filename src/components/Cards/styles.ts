import styled from "styled-components";
import pattern from "../../assets/images/bg-main-desktop.png";
import cardFront from "../../assets/images/bg-card-front.png";
import cardBack from "../../assets/images/bg-card-back.png";

export const CardsContainer = styled.div`
  position: relative;
  max-height: 100vh;
  background-image: url(${pattern});
  background-size: cover;

  width: 100%;
  height: 350px;

  @media (min-width: 1024px) {
    width: auto;
    height: 100vh;
  }
`;

const card = styled.div`
  position: absolute;
  width: 320px;
  height: 170px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 9px;
  left: 49%;
  transform: translateX(-50%);

  @media (min-width: 576px) {
    width: 350px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    left: 0;
    transform: translateX(0);
  }
`;

export const FrontCard = styled(card)`
  display: grid;
  background-image: url(${cardFront});
  top: 10rem;
  z-index: 3;
  padding: 1rem;
  color: white;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    span {
      grid-column: 1 / -1;
      font-weight: bold;
      font-size: 1.5rem;
    }

    p:last-child {
      justify-self: end;
    }
  }

  @media (min-width: 1024px) {
    top: 8rem;
    left: 2rem;
  }
  @media (min-width: 1250px) {
    left: 8rem;
  }
`;

export const BackCard = styled(card)`
  background-image: url(${cardBack});
  top: 1rem;
  left: 52%;
  position: relative;
  color: white;
  font-weight: bold;

  p {
    position: absolute;
    left: 88%;
    top: 108px;
  }

  @media (min-width: 1024px) {
    top: 22rem;
    left: 4rem;
  }
  @media (min-width: 1250px) {
    left: 16rem;
  }
`;
