import React from "react";
import Button from "./button";
import { Crossl, Facebook, Instagram, Twitter } from "../../assets/icons";
import { useState } from "react/cjs/react.development";

function Modal({ closeModal }) {
  return (
    <div className="bg-white pt-9 w-80 drop-shadow-2xl ">
      <div className="mx-4 mb-9">
        <button onClick={() => closeModal(false)}>X</button>

        <p>this is inside modal</p>
      </div>
    </div>
  );
}

export default Modal;
