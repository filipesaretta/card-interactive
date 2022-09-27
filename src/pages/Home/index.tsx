import styled from "styled-components";

import pattern from "../../assets/images/bg-main-desktop.png";
import cardFront from "../../assets/images/bg-card-front.png";
import cardBack from "../../assets/images/bg-card-back.png";
import { FormEvent, useState } from "react";
import { Form } from "../../components/Form";
import { formatInputData } from "../../utils/formatInputData";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  width: 320px;
  height: 170px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 9px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 400px) {
    width: 350px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    left: 0;
    transform: translateX(0);
  }
`;

const FrontCard = styled(card)`
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

const BackCard = styled(card)`
  background-image: url(${cardBack});
  top: 1rem;
  left: 55%;
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

interface dataProps {
  holder: string;
  number: string;
  cvc: string;
  month: string;
  year: string;
}

export function Home() {
  const [cardData, setCardData] = useState<dataProps>({
    holder: "",
    number: "",
    cvc: "",
    month: "",
    year: "",
  } as dataProps);

  function handleChange(e: FormEvent) {
    const target = e.target as HTMLInputElement;

    formatInputData(e);

    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  }

  function checkTheInitialOfCardToSetFlag() {
    switch (cardData.number.charAt(0)) {
      case "4":
        return "Visa";
      case "5":
        return "Master";
      default:
        return false;
    }
  }
  const schema = yup
    .object({
      holder: yup.string().required("This field is required"),
      number: yup
        .string()
        .required("This field is required")
        .matches(/(^|\b\s+)\d+\s+/, "Needs to have 16 digits")
        .min(19, "Must have 16 digits")
        .max(19, "Must have 16 digits"),
      month: yup
        .string()
        .matches(
          /^(0?[1-9]|1[012])$/,
          "Must be a valid month between 01 and 12"
        ),
      year: yup.string().matches(/[1-9]/, "It's expired "),
      cvc: yup
        .string()
        .matches(/[0-9]/)
        .min(3)
        .max(3)
        .required("This field is required"),
    })
    .required();

  const methods = useForm({ resolver: yupResolver(schema) });

  return (
    <HomeContainer>
      <CardsContainer>
        <FrontCard>
          <span>{checkTheInitialOfCardToSetFlag()}</span>
          <div>
            <span>
              {cardData.number.length ? cardData.number : "1234 5678 9101 1234"}
            </span>
            <p>{cardData.holder.length ? cardData.holder : "John Doe"} </p>
            <p>
              {cardData.month || "01"} / {cardData.year || "23"}
            </p>
          </div>
        </FrontCard>
        <BackCard>
          <p>{cardData.cvc.length ? cardData.cvc : "123"}</p>
        </BackCard>
      </CardsContainer>
      <FormProvider {...methods}>
        <Form handleChange={handleChange} />
      </FormProvider>
    </HomeContainer>
  );
}
