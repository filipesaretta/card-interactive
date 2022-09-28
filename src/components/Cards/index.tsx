import { BackCard, CardsContainer, FrontCard } from "./styles";

interface dataProps {
  cardData: {
    holder: string;
    number: string;
    cvc: string;
    month: string;
    year: string;
  };
}
export function Cards({ cardData }: dataProps) {
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
  return (
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
  );
}
