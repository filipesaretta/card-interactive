import { FormEvent } from "react";
import { Details } from "./styles";

interface dataProps {
  cardData: {
    holder: string;
    number: string;
    cvc: string;
    month: string;
    year: string;
  };
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export function Form({ cardData, onChange }: dataProps) {
  return (
    <Details>
      <form>
        <label htmlFor="CardHolder">
          <span>Card Holder</span>
          <input
            type="text"
            id="CardHolder"
            name="holder"
            value={cardData.holder}
            onChange={onChange}
            placeholder="John Doe"
          />
        </label>

        <label htmlFor="CardNumber">
          <span>Card Number</span>
          <input
            type="text"
            id="CardNumber"
            name="number"
            value={cardData.number}
            onChange={onChange}
            placeholder="1234 1234 1234 1234"
          />
        </label>

        <div>
          <label htmlFor="ExpDate">
            <span>Exp. Date (MM/YY)</span>
            <input
              type="text"
              name="month"
              value={cardData.month}
              onChange={onChange}
              placeholder="01"
            />
            <input
              type="text"
              name="year"
              value={cardData.year}
              onChange={onChange}
              placeholder="23"
            />
          </label>

          <label htmlFor="cvc">
            <span>CVC</span>
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={cardData.cvc}
              onChange={onChange}
              placeholder="123"
            />
          </label>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </Details>
  );
}
