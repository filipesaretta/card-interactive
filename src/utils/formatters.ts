import { FormEvent } from "react";

export function format(e: FormEvent) {
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
}
