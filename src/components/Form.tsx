import { FormEvent } from "react";
import { useFormContext } from "react-hook-form";

import { Details } from "./styles";

interface dataProps {
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}
interface schemaProps {
  holder: string;
  number: string;
  cvc: string;
  month: string;
  year: string;
}

export function Form({ handleChange }: dataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<schemaProps>();

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
          <p>{errors.holder?.message}</p>
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
          <p>{errors.number?.message}</p>
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
            <p>{errors.month?.message}</p>
            <p>{errors.year?.message}</p>
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
