import { useState } from "react";
import Button from "./Button";

const ItemCollectionSelection = ({ collection, onSave }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="flex p-5 items-center rounded-lg border-2 border-transparent hover:border-gray-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="basis-3/12 mr-6 h-full">
        <img
          src={collection.images[0]}
          alt="recipe"
          className="rounded-lg object-cover h-full"
        />
      </div>
      <div className="basis-6/12 mr-2 font-inter text-gray-600">
        <div className="h-fit">
          <p className="font-semibold text-lg mb-1">{collection.name}</p>
          <p className="font-regular text-sm">{collection.categories[0].count} Resep</p>
        </div>
      </div>
      <div className="basis-3/12 h-fit grid justify-items-end">
        <div className={"w-fit " + (isHovering ? "visible" : "invisible")}>
          <Button onClick={onSave}>Simpan</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCollectionSelection;
