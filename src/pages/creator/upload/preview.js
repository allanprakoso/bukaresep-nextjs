import ContainterXL from "../../../components/ContainerXL"
import { Bookmark, Clock, Leve, Minus, Plusl, Share, Star } from "../../../assets/icons"
import ItemIngredient from "../../../components/ItemIngredient"
import ItemInstruction from "../../../components/ItemInstruction"
import Button from "../../../components/Button"
import { useState, useEffect, useContext } from "react";
import { useAxiosWithContext } from "../../../configs/creator/useAxios";
import AuthContext from "../../../context/CreatorAuthContext";
import { useRouter } from "next/router";

const DetailRecipe = () => {
    const router = useRouter()
    const api = useAxiosWithContext();
    const { tempRecipe, creator } = useContext(AuthContext);
    const [recipe, setRecipe] = useState({
        name: "",
        status: "",
        url_image: "",
        group_ingredients: [],
        instructions: [
            { step: "1", instruction: "", file_image: null, url_image: "" },
        ],
        cooking_time: 1,
        serving: 1,
        category_id: 1,
        cuisine_id: 1,
        level_id: 1,
        tags: [""],
    });

    useEffect(() => {
        if (tempRecipe) {
            const levels = ['Mudah', 'Sedang', 'Sulit'];
            const categories = ['Makanan', 'Minuman', 'Cemilan'];
            const cuisines = ['Indonesia'];
            tempRecipe.category_id = categories[tempRecipe.category_id - 1];
            tempRecipe.cuisine_id = cuisines[tempRecipe.cuisine_id - 1];
            tempRecipe.level_id = levels[tempRecipe.level_id - 1];
            setRecipe(tempRecipe);
            console.log(tempRecipe);
        }
    }, [tempRecipe])
    const onChangeForm = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    return (
        <ContainterXL>
            <section className="preview flex flex-row justify-between items-center mt-20">
                <div className="basis-5/12">
                    <h5 className="text-h5 font-quicksand font-bold text-brand-dark mb-3">{recipe.category_id}</h5>
                    <h2 className="text-h2 font-quicksand font-bold text-gray-600 leading-[48px] mb-3">{recipe.name}</h2>

                    <div className="flex justify-between items-center">
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
                                <p className="text-lg font-semibold text-gray-600">{recipe.cooking_time}</p>
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
                                <p className="text-lg font-semibold text-gray-600">{recipe.level_id}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-11">
                        <div className="creator-profile">
                            <img src="/pic/lp3.jpg" className="rounded-full obeject-cover h-14 w-14" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-800 font-semibold">Penulis</p>
                            <p className="text-lg text-gray-600">{creator?.username}</p>
                        </div>
                    </div>

                    <div className="mt-24 flex space-x-3">
                        <Button>
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
                        src={recipe.file_image ? URL.createObjectURL(recipe.file_image) : ""}
                        alt="recipe"
                        className="rounded-[20px] object-cover h-96 w-full"
                    />
                </div>
            </section>

            <div className="recipe">
                <div className="flex flex-row mt-40">
                    <div className="basis-3/12 hide-scroll-top">quick view</div>

                    <div className="recipe">
                        <section className="bahan">
                            <h3 className="text-h3 font-quicksand font-bold text-gray-800">Bahan</h3>
                            <div className="flex items-center space-x-14">
                                <h5 className="text-h5 font-quicksand font-bold text-gray-600">Porsi saji</h5>
                                <form className="portion flex space-x-3">
                                    <button className="bg-gray-300 p-2 rounded-md">
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
                                    <input type="number" name="portion" value={recipe.serving} onChange={onChangeForm}
                                        className="w-16 text-center text-h5 font-quicksand font-bold text-gray-600 focus:outline-none focus:border-b-2"></input>
                                    <button className="bg-gray-300 p-2 rounded-md">
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
                                </form>
                            </div>

                            <section className="flex flex-col space-y-3 mt-10">
                                {
                                    recipe.group_ingredients.map((ingredient, index) => (
                                        <>
                                            <h5 className="text-h5 font-quicksand font-bold text-gray-800" key={index}>{ingredient.group}</h5>
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
                            <h3 className="text-h3 font-quicksand font-bold text-gray-800 mb-16">Cara Membuat</h3>
                            <div>
                                {
                                    recipe.instructions.map((instruction, index) => (
                                        <ItemInstruction instruction={instruction} url_image={(instruction.file_image != null) ? URL.createObjectURL(instruction.file_image) : ""} />
                                    ))
                                }
                            </div>
                        </section>

                    </div>

                </div>
            </div>

            <div className="border-b-[1px] mt-40"></div>
            <div className="flex flex-row">
                <div className="basis-3/12"></div>
                <div className="rating-tag mt-16">
                    <div className="rating flex justify-between items-center">
                        <div>
                            <h4 className="text-h4 font-quicksand font-bold text-gray-800">Beri ulasan</h4>
                            <p className="text-lg text-gray-600">Apakah kamu suka dengan resep ini?</p>
                        </div>
                        <div>rating</div>
                    </div>

                    <div className="tag mt-16">
                        <h4 className="text-h4 font-quicksand font-bold text-gray-800">Tags</h4>
                        {
                            recipe.tags.map((tag, index) => (
                                <button key={index} className="border border-gray-400 px-4 py-2 rounded-full">{tag}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ContainterXL>

    );
}

export default DetailRecipe;