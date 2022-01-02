import { useState } from 'react';

const ItemCollectionSelection = ({ collection }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div className="flex h-28 flex-row items-center rounded-lg border-2 border-transparent hover:border-gray-300"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="basis-3/12 p-5 h-full">
                <img src={collection.images[0]} alt="recipe" className="rounded-lg object-cover h-full" />
            </div>
            <div className="basis-6/12 font-inter text-gray-600">
                <div className="h-fit">
                    <p className="font-semibold text-lg mb-1">{collection.title}</p>
                    <p className="font-regular text-sm">11 Resep</p>
                </div>
            </div>
            <div className="basis-3/12 h-fit grid justify-items-end">
                <div className={"w-fit mr-5 " + (isHovering ? "visible" : "invisible")}>
                    <button className="bg-brand-brighter text-white font-bold py-2 px-4 rounded">
                        Simpan
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ItemCollectionSelection;