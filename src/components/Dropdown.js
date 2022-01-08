import React from "react";

const DropdownMenu = ({ children, size, onMouseLeave, onClick, ...props }) => {
  // size : LARGE, FULL, SMALL
  const DROPDOWNSIZE = {
    LARGE: " w-[244px] z-50 right-20 mt-16",
    FULL: " w-full relative",
    SMALL: " w-[152px]",
  };
  const sizeClassName = DROPDOWNSIZE[size || "LARGE"];

  return (
    <div onMouseLeave={onMouseLeave} onClick={onClick} aria-hidden="true" className={"absolute" + sizeClassName}>
      <div
      
      className="bg-white py-6 rounded-md drop-shadow-xl flex flex-col space-y-2 border-solid border-[0.8px] border-gray-200 overflow-hidden" 
    >
      {children}
    </div>
    </div>
  );
};

const DropdownItem = ({ children, color, ...props }) => {
  const TEXTCOLOR = {
    GRAY: " text-gray-600",
    RED: " text-brand-dark",
  };
  const colorClassName = TEXTCOLOR[color || "GRAY"];

  return (
    <button
      onClick={props.onClick}
      className={
        "cursor-pointer w-full hover:bg-gray-100 py-2 px-8 text-base text-left capitalize" +
        colorClassName
      }
    >
      {children}
    </button>
  );
};

const Divider = () => {
  return <div className="border-b-[0.8px] border-gray-200 mx-6"></div>;
};

module.exports = { DropdownMenu, DropdownItem, Divider };
