import { Menu_Burger } from "../../assets/icons"

const CardCollection = () => {
    const collection = {
        title: "Inspirasi kreasi resep kayu manis wuenak tenan ra ngapusi",
        images: ["https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg", "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg", "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg"],
        categories: [{
            name: "Makanan",
            count: 2,
        },
        {
            name: "Cemilan",
            count: 2,
        },
        {
            name: "Minuman",
            count: 2,
        }
        ],
    }

    return (
        <div className="font-inter max-2-xs text-gray-600 mx-auto">
            <div className="bg-white rounded-lg w-64 pb-8">
                <div className="grid gap-1 grid-rows-2 grid-flow-col h-48">
                    <div className="row-span-2 col-span-2">
                        <img src={collection.images[0]} alt="recipe" className="rounded-l-lg object-cover h-full" />
                    </div>
                    <div className="col-span-1">
                        <img src={collection.images[1]} alt="recipe" className="rounded-tr-lg object-cover h-full" />
                    </div>
                    <div className="col-span-1">
                        <img src={collection.images[2]} alt="recipe" className="rounded-br-lg object-cover h-full" />
                    </div>
                </div>

                <div className="mt-3">
                    <p className="mb-auto text-gray-800 text-lg font-semibold truncate"></p>
                    <div className="flex text-sm space-x-1 font-regular mb-1">
                        <p>8 makanan</p>
                        <p>·</p>
                        <p>10 cemilan</p>
                        <p>·</p>
                        <p>8 minuman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCollection;