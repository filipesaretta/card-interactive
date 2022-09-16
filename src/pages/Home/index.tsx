import styled from "styled-components";

import pattern from "../../assets/images/bg-main-desktop.png";
import cardFront from "../../assets/images/bg-card-front.png";
import cardBack from "../../assets/images/bg-card-back.png";

const HomeContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const CardsContainer = styled.div`
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
  width: 350px;
  height: 200px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 9px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 1024px) {
    left: 0;
    transform: translateX(0);
  }
`;

const FrontCard = styled(card)`
  background-image: url(${cardFront});
  top: 10rem;
  z-index: 3;
  @media (min-width: 1024px) {
    top: 8rem;
    left: 2rem;
  }
  @media (min-width: 1250px) {
    left: 8rem;
  }
`;

const BackCard = styled(card)`
  background-image: url(${cardBack});
  top: 1rem;
  left: 55%;
  @media (min-width: 1024px) {
    top: 22rem;
    left: 4rem;
  }
  @media (min-width: 1250px) {
    left: 16rem;
  }
`;

const Details = styled.div`
  max-width: 450px;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: center;
  form {
    label {
      display: flex;
      flex-direction: column;
    }
    div {
      display: flex;
    }
  }
`;

export function Home() {
  return (
    <HomeContainer>
      <CardsContainer>
        {/* <img src={pattern} alt="" /> */}

        <FrontCard>
          <p>Testing</p>
        </FrontCard>
        <BackCard>
          <p>Testing</p>
        </BackCard>
      </CardsContainer>
      <Details>
        <form action="">
          <label htmlFor="CardHolder">
            Card Holder
            <input type="text" id="CardHolder" />
          </label>
          <label htmlFor="CardNumber">
            Card Number
            <input type="text" id="CardNumber" />
          </label>

          <div>
            <label htmlFor="ExpDate">
              Exp. Date (MM/YY)
              <input type="text" />
            </label>

            <label htmlFor="cvc">
              CVC
              <input type="text" id="cvc" />
            </label>
          </div>
        </form>
      </Details>
    </HomeContainer>
  );
}
