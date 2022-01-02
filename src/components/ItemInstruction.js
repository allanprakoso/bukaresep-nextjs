const ItemInstruction = () => {
    const instruction = {
        id: 1,
        step: 1,
        instruction: "Bersihkan daging dan kulit udang dengan mencuci dengan air dan sabun. Potong-potong daging udang menjadi 4 bagian, lalu potong-potong kulit udang menjadi 4 bagian.",
        url_image: "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg"
    }
    return (
        <div className="w-full h-48 flex items-center gap-x-8">
            <img src={instruction.url_image} className="h-full w-64 rounded-lg" />
            <div className="py-auto h-fit">
                <div className="flex gap-x-6">
                    <h4 className="text-h4 font-quicksand font-bold text-gray-800">{instruction.step}</h4>
                    <p className="text-base text-gray-600 font-inter font-regular">{instruction.instruction}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemInstruction