import Button from "../../components/test/button";
import ModalDialog from "../../components/test/modal";
import { useState } from "react";

export default function Home() {
  const modal = {
    title: "yuhuuuws",
    content: (
      <div className="flex justify-between space-x-3">
        <Button color="PRIMARY" size="LONG">
          lanjoot{" "}
        </Button>
        <Button color="SECONDARY" size="LONG">
          cancle{" "}
        </Button>
      </div>
    ),
    footer: "footers",
  };

  return (
    <>
      <Button color="PRIMARY">Open Modal</Button>
      {/* <ModalDialog title={modal.title} content={modal.content} /> */}
    </>
  );
}
