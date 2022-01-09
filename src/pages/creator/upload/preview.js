import ContainterXL from "../../../components/ContainerXL"
import { Bookmark, Clock, Leve, Minus, Plusl, Share, Star } from "../../../assets/icons"
import ItemIngredient from "../../../components/ItemIngredient"
import ItemInstruction from "../../../components/ItemInstruction"
import Button from "../../../components/Button"
import { useState, useEffect, useContext } from "react";

const DetailRecipe = () => {

    const [recipe, setRecipe] = useState({
        id: 1,
        title: "Udang Goreng Tepung Saus Asam Manis",
        level: "Mudah",
        time: 30,
        rating: 4.5,
        category: "Makanan",
        creator: "Inem Susanti",
        image: "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    });

    const onChangeForm = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    return (
        <ContainterXL>
            <section className="preview flex flex-row justify-between items-center mt-20">
                <div className="basis-5/12">
                    <h5 className="text-h5 font-quicksand font-bold text-brand-dark mb-3">{recipe.category}</h5>
                    <h2 className="text-h2 font-quicksand font-bold text-gray-600 leading-[48px] mb-3">{recipe.title}</h2>

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
                                <p className="text-lg font-semibold text-gray-600">{recipe.time}</p>
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
                                <p className="text-lg font-semibold text-gray-600">{recipe.level}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-11">
                        <div className="creator-profile">
                            <img src="/pic/lp3.jpg" className="rounded-full obeject-cover h-14 w-14" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-800 font-semibold">Penulis</p>
                            <p className="text-lg text-gray-600">{recipe.creator}</p>
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
                        src={recipe.image}
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
                                <h5 className="text-h5 font-quicksand font-bold text-gray-800">Bahan Isi</h5>
                                <ItemIngredient />
                            </section>
                        </section>

                        <section className="steps mt-20">
                            <h3 className="text-h3 font-quicksand font-bold text-gray-800 mb-16">Cara Membuat</h3>
                            <div>
                                <ItemInstruction />
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
                        <button className="border border-gray-400 px-4 py-2 rounded-full">Ayam</button>
                    </div>
                </div>
            </div>




        </ContainterXL>

    );
}

export default DetailRecipe;