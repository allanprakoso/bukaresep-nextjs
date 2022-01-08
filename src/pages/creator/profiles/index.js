import { useAxios } from '../../../configs/creator/useAxios';
import GridListRecipe from '../../../parts/GridListRecipe';

const Profiles = (props) => {
    return (
        <div className="mt-16 md:mt-24 xl:mx-[22.5rem] lg:mx-14 md:mx-10 sm:mx-4">
            <GridListRecipe recipes={props.recipes} />
        </div>
    );
}

export async function getServerSideProps(context) {

    const { req, res } = context;
    if (!req.cookies.authTokens) {
        return {
            redirect: {
                permanent: false,
                destination: "/creator"
            }
        }
    }
    const token = JSON.parse(req.cookies.authTokens);
    let recipes = [];
    const api = useAxios(token);
    await api.get("/creator/recipes").then(res => {
        recipes = res.data.results;
    });
    return { props: { recipes } };

}
export default Profiles;