import { FormEvent, useState } from "react";
import { Form } from "../../components/Form";
import { formatInputData } from "../../utils/formatInputData";
import { Cards } from "../../components/Cards";

import styled from "styled-components";

interface dataProps {
  holder: string;
  number: string;
  cvc: string;
  month: string;
  year: string;
}

const HomeContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const initialStateCard = {
  holder: "",
  number: "",
  cvc: "",
  month: "",
  year: "",
};

export function Home() {
  const [cardData, setCardData] = useState<dataProps>(
    initialStateCard as dataProps
  );

  function handleResetCard() {
    setCardData(initialStateCard);
  }

  function handleChange(e: FormEvent) {
    const target = e.target as HTMLInputElement;

    formatInputData(e);

    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  }

  return (
    <HomeContainer>
      <Cards cardData={cardData} />
      <Form handleChange={handleChange} handleResetCard={handleResetCard} />
    </HomeContainer>
  );
}
