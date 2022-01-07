import CarouselRecipe from "../../parts/CarouselRecipe";
import RecipeSlider from "../../parts/RecipeSlider";
import { Modal, ModalTitle, ModalContent } from "../../components/ModalDialog";
import { useState } from "react";
import Button from "../../components/Button";
import disableScroll from "disable-scroll";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col space-y-20 mt-[120px] mx-[360px]">
      <Button color="PRIMARY" onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>

      <RecipeSlider />
      <CarouselRecipe />

      {openModal && (
        <Modal closeModal={setOpenModal}>
          <ModalTitle>test modal</ModalTitle>
          <ModalContent>
            <p>yeas</p>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default Home;
