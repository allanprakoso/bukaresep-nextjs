import CarouselRecipe from "../../parts/CarouselRecipe";
import RecipeSlider from "../../parts/RecipeSlider";
import { Modal, ModalTitle, ModalContent } from "../../components/ModalDialog";
import { useState } from "react";
import Button from "../../components/Button";
import disableScroll from "disable-scroll";
import DeleteCollection from "../../parts/Creator/DeleteCollection";
import EditCollection from "../../parts/Creator/EditCollection";
import AddRecipetoCollection from "../../parts/Creator/AddRecipetoCollection";

function Home() {
  const [openAtribute, setOpenAtribute] = useState(true);

  return (
    <div className="flex flex-col space-y-20 mt-[120px] mx-[360px]">
      <Button color="PRIMARY" onClick={() => setOpenAtribute(true)}>
        Open Modal
      </Button>

      {openAtribute && (
        <AddRecipetoCollection close={() => setOpenAtribute(false)} />
      )}
    </div>
  );
}

export default Home;
