import { FormEvent } from "react";

export function formatInputData(e: FormEvent) {
  const target = e.target as HTMLInputElement;

  if (target.name === "holder" && target.value) {
    target.value = target.value.replace(/[0-9]+/gi, "");
  }

  if (target.name === "number" && target.value) {
    target.value = target.value
      .replace(/[^0-9]+/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  }

  if (target.name === "year" || target.name === "month") {
    target.value = target.value.replace(/[^0-9]/g, "").slice(0, 2);

    const valueAsANumberForChecking = Number(target.value.charAt(0));

    if (target.name === "month" && valueAsANumberForChecking > 12) {
      target.value = "12";
    }
  }

  if (target.name === "cvc") {
    target.value = target.value.replace(/[^0-9]/g, "").slice(0, 3);
  }
}
