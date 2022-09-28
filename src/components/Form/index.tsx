import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ThankYou } from "../ThankYou";

import { Details } from "./styles";

interface dataProps {
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  handleResetCard: () => void;
}

interface schemaProps {
  holder: string;
  number: string;
  cvc: string;
  month: string;
  year: string;
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
    month: yup.string().matches(/^(0?[1-9]|1[012])$/, "Must be a valid month."),
    year: yup.string().matches(/[1-9]/, "It's expired"),
    cvc: yup
      .string()
      .matches(/[0-9]/, "This field is required")
      .min(3)
      .max(3)
      .required("This field is required"),
  })
  .required();

export function Form({ handleChange, handleResetCard }: dataProps) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<schemaProps>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    handleShow();
    reset();
  });

  return (
    <>
      {!show ? (
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
                className={errors.holder && "alert"}
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
                className={errors.number && "alert"}
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
                  className={errors.month && "alert"}
                />
                <p>{errors.month?.message}</p>

                <input
                  type="text"
                  {...register("year", {
                    onChange: handleChange,
                  })}
                  placeholder="23"
                  className={errors.year && "alert"}
                />
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
                  className={errors.cvc && "alert"}
                />
                <p>{errors.cvc?.message}</p>
              </label>
            </div>
            <button type="submit">Confirm</button>
          </form>
        </Details>
      ) : (
        <ThankYou handleShow={handleShow} handleResetCard={handleResetCard} />
      )}
    </>
  );
}
