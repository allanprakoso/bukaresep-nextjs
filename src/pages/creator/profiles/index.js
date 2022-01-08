import { useAxios } from '../../../configs/creator/useAxios';
import GridListRecipe from '../../../parts/GridListRecipe';

const Profiles = (props) => {
    return (
        <div className="mt-[200px] container">
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