import { Search } from "../../assets/icons";
import RecipeSlider from "../../parts/global/RecipeSlider"
import CarouselRecipe from "../../parts/global/CarouselRecipe"
import GridListRecipe from "../../parts/global/GridListRecipe"
import ContainerXL from "../../components/ContainerXL"
import Button from "../../components/Button";
import CardRecipe from "../../components/CardRecipe";
import { useEffect, useState } from 'react'
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <>
      <section className="header">
        <div className="bg-[url('/pic/userHeader.jpg')] bg-cover rounded-xl flex flex-col items-center space-y-6 pt-48 pb-20">
          <h1 className="text-display font-quicksand font-bold text-gray-800">Temukan resep masakan</h1>
          <p className="text-h5 font-quicksand font-medium ">Kumpulan beragam resep masakan lezat untuk makan sehari-hari</p>
        </div>

        <div className="flex justify-center -mt-8 drop-shadow-md">
          <form className="flex items-center ml-8 bg-white py-4 px-5 rounded-lg">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <Search />
            </svg>
            <input id="search" type="text" placeholder="Cari resep"
              className="focus:outline-none text-base text-gray-600 w-[520px]"
            />
          </form>
        </div>
        <div className="flex space-x-6 justify-center mt-5">
          <p className="text-base font-medium text-gray-600 ">Direkomendasikan: </p>
          <a className="text-base text-brand-dark cursor-pointer hover:underline">ayam </a>
          <a className="text-base text-brand-dark cursor-pointer hover:underline">kangkung </a>
          <a className="text-base text-brand-dark cursor-pointer hover:underline">soto </a>
          <a className="text-base text-brand-dark cursor-pointer hover:underline">rendang </a>
          <a className="text-base text-brand-dark cursor-pointer hover:underline">bakso </a>
        </div>
      </section>
      <ContainerXL>
        <section className="resep-terbaru mt-32">
          <h4 className="text-h4 font-quicksand font-bold text-gray-800 mb-5">Resep Terbaru</h4>
          <RecipeSlider recipes={recipes} />
        </section>

        <section className="resep-carousel mt-28">
          <CarouselRecipe />
        </section>

        <section className="grid-recipe">
          <div className="grid grid-cols-4 gap-x-8 gap-y-11">
            {recipes.map((recipe) => (
              <CardRecipe recipe={recipe} path="recipes" type="user" />
            ))}
          </div>
        </section>

        <section className="banner mt-32">
          <div className="bg-[url('/pic/bannerUser.jpg')] bg-cover rounded-xl flex flex-col pt-20 pb-16 px-20">
            <h3 className="text-h3 font-quicksand font-bold text-white mb-2">Yuk, bagikan resepmu</h3>
            <p className="text-lg font-quicksand font-medium text-white">Jadilah penulis resep dan dapatkan penghasilan dari resep masakanmu.</p>
            <div className="mt-10">
              <Button>Bergabung Sekarang</Button>
            </div>
          </div>
        </section>
      </ContainerXL>
    </>
  );
}

export default Home;