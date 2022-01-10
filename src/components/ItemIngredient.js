import { useEffect, useState } from 'react'
const ItemIngredient = ({ ingredient }) => {
    const [unit, setUnit] = useState('unit')
    useEffect(() => {
        async function getIngredient() {
            const res = await fetch('http://47.254.242.193:5000/unit/' + ingredient.unit_id)
            const data = await res.json()
            setUnit(data.unit)
        }
        getIngredient()
    }, [ingredient.unit_id])
    return (
        <div className="flex font-inter text-lg text-gray-600 font-regular">
            <div className="basis-1/4">
                <p>{ingredient.amount} {unit}</p>
            </div>
            <div className="basis-3/4">
                <p className="font-semibold">{ingredient.name}</p>
                <p className="text-sm text-gray-400">{ingredient.description}</p>
            </div>
        </div>
    )
}

export default ItemIngredient