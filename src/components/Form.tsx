import { FormEvent } from "react";
import { useFormContext } from "react-hook-form";

import { Details } from "./styles";

interface dataProps {
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}
export function Form({ handleChange }: dataProps) {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Details>
      <form onSubmit={onSubmit}>
        <label htmlFor="CardHolder">
          <span>Card Holder</span>
          <input
            type="text"
            {...register("holder", {
              onChange: handleChange,
            })}
            placeholder="John Doe"
          />
        </label>

        <label htmlFor="CardNumber">
          <span>Card Number</span>
          <input
            type="text"
            id="CardNumber"
            {...register("number", {
              onChange: handleChange,
            })}
            placeholder="1234 1234 1234 1234"
          />
        </label>

        <div>
          <label htmlFor="ExpDate">
            <span>Exp. Date (MM/YY)</span>
            <input
              type="text"
              {...register("month", {
                onChange: handleChange,
              })}
              placeholder="01"
            />
            <input
              type="text"
              {...register("year", {
                onChange: handleChange,
              })}
              placeholder="23"
            />
          </label>

          <label htmlFor="cvc">
            <span>CVC</span>
            <input
              type="text"
              id="cvc"
              {...register("cvc", {
                onChange: handleChange,
              })}
              placeholder="123"
            />
          </label>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </Details>
  );
}
