/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Button({
  message = "Submit",
  handleClick = () => {},
  reverseColor = false,
  isDark = false,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={
        reverseColor
          ? `btn-nav ${
              isDark
                ? hovered
                  ? `btn-nav-primary`
                  : `btn-nav-reverse-primary`
                : hovered
                ? `btn-nav-primary`
                : `btn-nav-reverse-primary`
            }`
          : `btn-nav ${
              isDark
                ? hovered
                  ? `btn-reverse-primary`
                  : `btn-primary`
                : hovered
                ? `btn-reverse-primary`
                : `btn-primary`
            }`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {message}
    </button>
  );
}
