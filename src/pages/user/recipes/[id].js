import ContainterXL from "../../../components/ContainerXL"
import { Bookmark, Clock, Leve, Minus, Plusl, Share, Star, StarBorder } from "../../../assets/icons"
import ItemIngredient from "../../../components/ItemIngredient"
import ItemInstruction from "../../../components/ItemInstruction"
import Button from "../../../components/Button"
import ActiveRating from "../../../components/ActiveRating"
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/UserAuthContext";
import AddRecipetoCollection from "../../../parts/user/dialog/AddRecipetoCollection"
const DetailRecipe = (props) => {
    const [recipe, setRecipe] = useState(props.recipe);
    const { putRecipeRating, getRecipeRatingUser, user, postRating } = useContext(AuthContext)
    const [openSaveCollection, setOpenCollection] = useState(false);
    const [rating, setRating] = useState()
    const [ratingValue, setRatingValue] = useState()
    const [updatedata, setUpadate] = useState(true)

    const sendRating = async () => {
        if (rating != undefined) {
            const data = await putRecipeRating(recipe.id, ratingValue);
            setRating(data)
            setUpadate(true)
        }
        const data = await postRating(recipe.id, ratingValue)
        setRating(data)
        setUpadate(true)
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getRecipeRatingUser(recipe.id)
            setRating(data)
        }
        if (updatedata) {
            fetchData();
        }
        setUpadate(false)
    }, [recipe.id, updatedata])

    return (
        <>
            <ContainterXL>
                {openSaveCollection && <AddRecipetoCollection show={openSaveCollection} onClose={setOpenCollection} recipe_id={recipe.id} />}
                <section className="preview flex flex-row justify-between items-center mt-20">
                    <div className="basis-5/12">
                        <h5 className="text-h5 font-quicksand font-bold text-brand-dark mb-3 capitalize">{recipe.category.name}</h5>
                        <h2 className="text-h2 font-quicksand font-bold text-gray-800 leading-[48px] mb-3">{recipe.name}</h2>
                        <div className="flex justify-between items-center mt-5">
                            <div className="rating flex space-x-3 items-center">
                                <div className="flex space-x-2">
                                    <svg
                                        fill="#FFF"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Star />
                                    </svg>
                                    <svg
                                        fill="#FFF"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Star />
                                    </svg>
                                    <svg
                                        fill="#FFF"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Star />
                                    </svg>
                                    <svg
                                        fill="#FFF"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Star />
                                    </svg>
                                    <svg
                                        fill="#FFF"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Star />
                                    </svg>
                                </div>
                                <p className="text-lg font-semibold text-amber-400">{recipe.rating}</p>
                            </div>

                            <div className="flex space-x-5 items-center mr-8">
                                <div className="flex space-x-2 items-center">
                                    <svg
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Clock />
                                    </svg>
                                    <p className="text-lg font-semibold text-gray-600">{recipe.cooking_time} Menit</p>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <svg
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Leve />
                                    </svg>
                                    <p className="text-lg font-semibold text-gray-600">{recipe.level.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mt-11">
                            <div className="creator-profile">
                                <img src="/pic/lp3.jpg" className="rounded-full obeject-cover h-14 w-14" />
                            </div>
                            <div>
                                <p className="text-lg text-gray-800 font-semibold">Penulis</p>
                                <p className="text-lg text-gray-600">{recipe.creator ?? "Inem Painem"}</p>
                            </div>
                        </div>

                        <div className="mt-20 flex space-x-3">
                            <Button onClick={() => setOpenCollection(true)}>
                                <div className="mr-2">
                                    <svg
                                        fill="#fff"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Bookmark />
                                    </svg>
                                </div>
                                Simpan resep
                            </Button>
                            <Button>
                                <svg
                                    fill="#fff"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Share />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <div className="basis-6/12">
                        <img
                            src={recipe.url_image}
                            alt="recipe"
                            className="rounded-[20px] object-cover h-96 w-full"
                        />
                    </div>
                </section>

                <div className="recipe">
                    <div className="mt-40 flex flex-row">
                        <div className="basis-5/12recipe">
                            <section className="bahan">
                                <h3 className="text-h3 font-quicksand font-bold text-gray-800">Bahan</h3>
                                <div className="flex items-center space-x-14">
                                    <h5 className="text-h5 font-quicksand font-bold text-gray-600">Porsi saji</h5>
                                    <div className="portion flex space-x-3">
                                        <button className="bg-gray-200 p-2 rounded-md">
                                            <svg
                                                fill="#4B5563"
                                                width="16px"
                                                height="16px"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <Minus />
                                            </svg>
                                        </button>
                                        <input type="number" value={recipe.serving}
                                            className="w-16 text-center text-h5 font-quicksand font-bold text-gray-600 focus:outline-none focus:border-b-2"></input>
                                        <button className="bg-gray-200 p-2 rounded-md">
                                            <svg
                                                fill="#4B5563"
                                                width="16px"
                                                height="16px"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <Plusl />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <section className="flex flex-col space-y-3 mt-10">
                                    {
                                        recipe.group_ingredients.map((ingredient, index) => (
                                            <>
                                                <h5 className="text-h5 font-quicksand font-bold text-gray-800 pt-8" key={index}>{ingredient.group}</h5>
                                                {
                                                    ingredient.ingredients.map((ingredient, i) => (
                                                        <ItemIngredient ingredient={ingredient} />
                                                    ))
                                                }
                                            </>
                                        ))
                                    }


                                </section>
                            </section>

                            <section className="steps mt-20">
                                <h3 className="text-h3 font-quicksand font-bold text-gray-800 mb-8">Cara Membuat</h3>
                                <div>
                                    {
                                        recipe.instructions.map((instruction, index) => (
                                            <div className="mb-4">
                                                <ItemInstruction instruction={instruction} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        </div>
                    </div>

                    {user &&
                        <>
                            <div className="border-b-[1px] mt-40"></div>
                            <section className="rating-tag mt-16">
                                <div className="rating flex items-center space-x-48">
                                    <div>
                                        <h4 className="text-h4 font-quicksand font-bold text-gray-800">Beri ulasan</h4>
                                        <p className="text-lg text-gray-600">Apakah kamu suka dengan resep ini?</p>
                                    </div>
                                    <ActiveRating initialRating={rating?.rating ?? 0} onChange={value => setRatingValue(value)} />
                                    <Button onClick={sendRating}>Kirim Ulasan</Button>
                                </div>

                                {/* <div className="tag mt-16">
                            <h4 className="text-h4 font-quicksand font-bold text-gray-800">Tags</h4>
                            {
                                recipe.tags.map((tag, index) => (
                                    <button key={index} className="border border-gray-400 px-4 py-2 rounded-full">{tag.id}</button>
                                ))
                            }
                        </div> */}
                            </section>
                        </>
                    }
                </div>
            </ContainterXL>

        </>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`http://47.254.242.193:5000/recipes/${id}`);
    const { recipe } = await res.json();

    return {
        props: {
            recipe
        }
    }
}
export default DetailRecipe;