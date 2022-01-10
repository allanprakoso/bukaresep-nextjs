const ItemIngredient = ({ ingredient }) => {
    return (
        <div className="flex font-inter text-lg text-gray-600 font-regular">
            <div className="basis-1/4">
                <p>{ingredient.amount} {ingredient.unit?.unit ?? "unit"}</p>
            </div>
            <div className="basis-3/4">
                <p className="font-semibold">{ingredient.name}</p>
                <p className="text-sm text-gray-400">{ingredient.description}</p>
            </div>
        </div>
    )
}

export default ItemIngredient