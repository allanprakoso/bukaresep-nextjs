import CarouselRecipe from "../../parts/CarouselRecipe";
import RecipeSlider from "../../parts/RecipeSlider";
import useAxios from "../../configs/creator/useAxios";
import axios from "axios";
function Home(props) {
    return (
        <div className="space-y-20 mt-[120px] mx-[360px]">
            <RecipeSlider />
            <CarouselRecipe />
            <p>{JSON.stringify(props.recipes ?? 'a')}</p>
        </div>
    );
}

export async function getServerSideProps({ req, res }) {
    const token = JSON.parse(req.cookies.authTokens);
    let recipes = [];
    const api = useAxios(token);
    await api.get("/creator/recipes").then(res => {
        recipes = res.data.results;
    });
    return { props: { recipes } };

}
export default Home;