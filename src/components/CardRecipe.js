import { Star } from '../assets/icons'

//create card recipe using tailwindcss
const CardRecipe = ({ recipe }) => {
    return (
        <div className="font-inter text-gray-600 mx-auto">
            <div className="bg-white rounded-lg shadow-lg max-w-sm w-64 pb-8">
                <div className="relative">
                    <img src={recipe.image} alt="recipe" className="rounded-t-lg object-cover h-full" />
                    <div className="absolute top-0 left-0 mt-4 ml-4">
                        <div className="bg-white rounded-full px-3 py-1">
                            <div className="flex items-center">
                                <svg width="9px" height="8.7px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <Star />
                                </svg>
                                <span className="ml-1 text-caption font-bold text-amber-400">{recipe.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-5 mr-8 mt-4">
                    <div className="flex text-sm space-x-1 font-regular mb-2">
                        <p>{recipe.category}</p>
                        <p>·</p>
                        <p>{recipe.level}</p>
                        <p>·</p>
                        <p>{recipe.time} menit</p>
                    </div>
                    <div className="min-h-full h-12">
                        <text className="font-semibold text-lg">{recipe.title}</text>
                    </div>
                    <div className="flex space-x-2 mt-6">
                        <p className="font-regular">By</p>
                        <p className="font-semibold">{recipe.creator}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardRecipe;