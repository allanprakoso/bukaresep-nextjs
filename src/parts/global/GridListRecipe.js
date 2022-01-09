import CardRecipe from "../../components/CardRecipe";

export default function GridListRecipe({ recipes }) {
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-11">
      {recipes.map((recipe) => (
        <CardRecipe recipe={recipe} path="/creator/recipes" />
      ))}
    </div>
  );
}
