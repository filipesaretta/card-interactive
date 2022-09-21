import { FormEvent } from "react";
import { Details } from "./styles";

interface dataProps {
  cardData: {
    holder: string;
    number: string;
    validity: string;
    cvc: string;
  };
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

export function Form({ cardData, onChange }: dataProps) {
  return (
    <Details>
      <form action="">
        <label htmlFor="CardHolder">
          Card Holder
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
          Card Number
          <input
            type="number"
            id="CardNumber"
            name="number"
            value={cardData.number}
            onChange={onChange}
            placeholder="1234 1234 1234 1234"
          />
        </label>

        <div>
          <label htmlFor="ExpDate">
            Exp. Date (MM/YY)
            <input
              type="text"
              name="validity"
              value={cardData.validity}
              onChange={onChange}
              placeholder="01/11"
            />
          </label>

          <label htmlFor="cvc">
            CVC
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
      </form>
    </Details>
  );
}
