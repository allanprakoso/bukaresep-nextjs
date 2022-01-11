import { Angle_down, Settings, Star } from "../assets/icons";
import Link from "next/link";
import { useState } from "react";
import { DropdownMenu, DropdownItem } from "../components/Dropdown"
import DeleteRecipe from "../parts/creator/dialog/DeleteRecipe";
import AddRecipetoCollection from "../parts/creator/dialog/AddRecipetoCollection";

//create card recipe using tailwindcss
const CardRecipe = ({ recipe, path, onDelete, type = 'creator' }) => {
  //open dropdown
  const [openDeleteRecipe, setOpenDeleteRecipe] = useState(false);
  const [openSaveCollection, setOpenCollection] = useState(false);

  const [openOption, setOpenOption] = useState();

  return (
    <>
      <div className="font-inter text-gray-600 mx-auto my-4">
        <div className="bg-white rounded-lg shadow-lg max-w-sm w-64 pb-8 hover:shadow-xl hover:-translate-y-[2px] transition ease-out group">
          <div className="relative">
            <div className="w-full h-[184px] overflow-hidden">
              <img
                src={recipe.image}
                alt="recipe"
                className="rounded-t-lg object-coverh h-[184px] w-64"
              />
            </div>
            {type != "creator" && <div className="absolute top-0 left-0 mt-4 ml-4">
              <div className="bg-white rounded-full px-3 py-1.5 max-w-14 max-h-6 overflow-hidden flex items-center">
                <div className="flex items-center">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Star />
                  </svg>
                  <span className="ml-1 text-caption font-bold text-amber-400">
                    {recipe.rating}
                  </span>
                </div>

              </div>
            </div>}

            {/* dropdown button  */}
            {type == "creator" && <div className="absolute top-0 left-0 mt-4 ml-4 cursor-pointer" onMouseEnter={() => setOpenOption(true)}>
              <div className="bg-white rounded-full px-3 py-2 max-w-14 max-h-6 overflow-hidden flex items-center">
                <div className="action-option">
                  <div className="flex items-center">
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Settings />
                    </svg>
                    <svg
                      className="ml-1"
                      width="10px"
                      height="10px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Angle_down />
                    </svg>
                  </div>
                </div>

              </div>
            </div>}
            {/* dropdown menu */}
            {openOption && (
              <div className="absolute top-0 left-4">
                <DropdownMenu size="SMALL" onMouseLeave={() => setOpenOption(false)}>
                  <DropdownItem onClick={() => setOpenCollection(true)}>simpan ke koleksi</DropdownItem>
                  <DropdownItem>edit resep</DropdownItem>
                  <DropdownItem>unggah</DropdownItem>
                  <DropdownItem onClick={() => setOpenDeleteRecipe(true)} >hapus</DropdownItem>
                </DropdownMenu>
              </div>
            )}
          </div>

          <div className="ml-5 mr-8 mt-4">
            <div className="flex text-sm space-x-1 font-regular mb-2">
              <p className="capitalize">{recipe.category}</p>
              <p>·</p>
              <p className="capitalize">{recipe.level}</p>
              <p>·</p>
              <p className="capitalize">{recipe.cooking_time} menit</p>
            </div>
            <div className="min-h-full h-12">
              <Link
                href={{
                  pathname: `${path}/${recipe.id}`,
                }}>
                <a>
                  <text className="font-semibold text-lg">{recipe.name}</text>
                </a>
              </Link>
            </div>
            <div className="flex space-x-2 mt-6">
              <p className="font-regular">By</p>
              <p className="font-semibold">{recipe.creator}</p>
            </div>
          </div>
        </div>
      </div>
      {openDeleteRecipe && <DeleteRecipe show={openDeleteRecipe} onClose={setOpenDeleteRecipe} recipe_id={recipe.id} onDelete={onDelete} />}
      {openSaveCollection && <AddRecipetoCollection show={openSaveCollection} onClose={setOpenCollection} recipe_id={recipe.id} />}
    </>

  );
};

export default CardRecipe;
