import CarouselRecipe from "../../parts/CarouselRecipe";
import RecipeSlider from "../../parts/RecipeSlider";

function Home() {
  return (
    <div className="flex flex-col space-y-20 mt-[120px] mx-[360px]">
      <RecipeSlider />
      <CarouselRecipe />
    </div>
  );
}

export default Home;
