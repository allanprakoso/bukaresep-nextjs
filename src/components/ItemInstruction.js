const ItemInstruction = ({ instruction, url_image }) => {
    return (
        <div className="w-full h-48 flex items-center gap-x-8">
            <img src={url_image} className="h-full w-64 rounded-lg" />
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