import Button from "../../components/test/button";
import { useState } from "react/cjs/react.development";
import Modal from "../../components/test/modal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div className="flex flex-col space-y-10 py-10 items-center">
      <h1>Nyoba modal pop up</h1>
      <button
        className="bg-gray-600 text-white p-2"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Modal
      </button>

      <Button color="PRIMARY" onClick={handleClick}>
        Modal
      </Button>

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}
