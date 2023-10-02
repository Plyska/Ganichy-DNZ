import { KeyboardEvent } from "react";

export const handleEnter =
  (fn: (event: KeyboardEvent) => void) => (event: KeyboardEvent) => {
    if (event.key === "13") {
      fn(event);
    }
  };
