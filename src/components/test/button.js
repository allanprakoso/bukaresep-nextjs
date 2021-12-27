import React from "react";

const Button = ({ children, color, size, ...props }) => {
  const BUTTON_COLOR = {
    PRIMARY:
      " bg-brand-dark text-white drop-shadow-lg hover:bg-brand-brighter hover:drop-shadow-none",
    SECONDARY:
      " border-solid border-[1.2px] border-gray-400 text-gray-600 hover:bg-gray-100",
    NOBG: " text-gray-600 hover:bg-gray-100",
    LINK: " text-gray-600 hover:text-brand-dark",
  };

  const BUTTON_SIZE = {
    SMALL: " flex items-center px-2 py-1.5 text-micro",
    MEDIUM: " flex items-center px-5 py-2 text-sm",
    LARGE: " flex items-center px-5 py-3 text-sm",
    LONG: " py-3 text-sm w-full ",
    XL: " flex items-center px-5 py-4 text-base",
  };

  const colorClassName = BUTTON_COLOR[color || "PRIMARY"];
  const sizeClassName = BUTTON_SIZE[size || "LARGE"];

  return (
    <button
      className={
        "text-center rounded-lg font-semibold" + colorClassName + sizeClassName
      }
    >
      {children}
    </button>
  );
};

export default Button;
