import { Angle_down, Crossl, Filter, Search } from "../../assets/icons";
import Button from "../../components/Button";
import ContainerXL from "../../components/ContainerXL"
import { useEffect, useState } from 'react'
import CardRecipe from "../../components/CardRecipe";
import { DropdownMenu, DropdownItem } from "../../components/Dropdown"
import { useRouter } from 'next/router'

const SearchResult = (props) => {
    const router = useRouter()
    const [recipes, setRecipes] = useState(props.recipes);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState(router.query.keyword);
    return (
        <ContainerXL>
            <div className="flex justify-center">
                <form className="search flex items-center ml-8 bg-white py-4 px-5 rounded-lg border border-gray-300 w-[688px] justify-between">
                    <div className="flex items-center">
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-4"
                        >  <Search />
                        </svg>
                        <input id="search" type="text" name="keyword" placeholder="Cari resep"
                            className="focus:outline-none text-h4 font-bold font-quicksand text-gray-600 "
                        />
                    </div>
                    <div className="h-7 w-7 rounded-full bg-gray-200 flex justify-center items-center" >
                        <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"

                        >  <Crossl />
                        </svg>
                    </div>
                </form>
            </div>

            <div className="flex justify-between text-lg font-semibold text-gray-800 mt-24">
                <div className="jml-hasil">
                    <span>Menampilkan </span>
                    <span>{recipes.length} Resep</span>
                    <span> untuk</span>
                    <span> {keyword}</span>
                </div>
            </div>

            <section className="grid-recipe mt-6">
                <div className="grid grid-cols-4 gap-x-8 gap-y-11">
                    {recipes.map((recipe) => (
                        <CardRecipe recipe={recipe} path="recipes" type="user" />
                    ))}
                </div>
            </section>
        </ContainerXL>
    );
}

export async function getServerSideProps(context) {
    const keyword = context.query.keyword ?? "";
    const response = await fetch(`http://47.254.242.193:5000/recipes/search?keyword=${keyword}`);
    const data = await response.json();
    var recipes = [];
    recipes = data.results;
    return { props: { recipes: recipes } };
}

export default SearchResult;