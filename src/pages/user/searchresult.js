import { Angle_down, Crossl, Filter, Search } from "../../assets/icons";
import Button from "../../components/Button";
import ContainerXL from "../../components/ContainerXL"
import { useEffect, useState } from 'react'
import CardRecipe from "../../components/CardRecipe";
import { DropdownMenu, DropdownItem } from "../../components/Dropdown"

const SearchResult = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch("http://47.254.242.193:5000/recipes");
            const data = await response.json();
            setRecipes(data.results);
            setLoading(false);
        }
        fetchData();
    }, [])
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
                        <input id="search" type="text" placeholder="Cari resep"
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
                    <span> Jml</span>
                    <span> untuk</span>
                    <span> "hasil "</span>
                </div>
                <div>
                    <Button color="SECONDARY" size="MEDIUM" onClick={() => setOpenFilter(true)} >
                        <div className="flex text-base text-gray-600 items-center justify-between w-full">
                            <svg
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >  <Filter />
                            </svg>
                            <span className="ml-4">Filter</span>
                        </div>
                    </Button>
                </div>
            </div>

            {openFilter && <div className="filter flex space-x-8 mt-4">

                <div className="w-full">
                    <p className="text-sm font-medium text-gray-800 mb-2">Kategori</p>
                    <select name="category"
                        value="category"
                        className="appearance-none border-[1.4px] border-gray-400 rounded-lg w-full px-5 py-2 text-base font-medium text-gray-600 focus:outline-gray-600">
                        <option>Makanan</option>
                        <option>Minuman</option>
                        <option>Camilan</option>
                    </select>
                </div>
                <div className="w-full">
                    <p className="text-sm font-medium text-gray-800 mb-2">Waktu</p>
                    <input value="waktu" type="number" placeholder="input menit"
                        className="appearance-none border-[1.4px] border-gray-400 rounded-lg w-full px-5 py-2 text-base font-medium text-gray-600 focus:outline-gray-600">
                    </input>
                </div>
                <div className="w-full">
                    <p className="text-sm font-medium text-gray-800 mb-2">Level</p>
                    <select name="level"
                        value="level"
                        className="appearance-none border-[1.4px] border-gray-400 rounded-lg w-full px-5 py-2 text-base font-medium text-gray-600 focus:outline-gray-600">
                        <option>Mudah</option>
                        <option>Sedang</option>
                        <option>Sulit</option>
                    </select>
                </div>

                {/* <div className="w-full">
                    <p className="text-sm font-medium text-gray-800 mb-2">Level</p>
                    <Button color="SECONDARY" size="MEDIUM">
                        <div className="flex text-base text-gray-600 items-center justify-between w-full">
                            <span>Level</span>
                            <svg
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >  <Angle_down />
                            </svg>
                        </div>
                    </Button>
                </div> */}
            </div>}

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

export default SearchResult;