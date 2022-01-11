import ContainterXL from "../../../../components/ContainerXL"
import Button from "../../../../components/Button"
import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router'
import AuthContext from "../../../../context/CreatorAuthContext"
import CardRecipe from "../../../../components/CardRecipe"
import { Spinner } from "../../../../assets/icons"
import DeleteCollection from "../../../../parts/creator/dialog/DeleteCollection";
import EditCollection from "../../../../parts/creator/dialog/EditCollection";

const DetailRecipe = (props) => {
    const router = useRouter()
    const { getCollection, getRecipesCollection, deleteRecipeFromCollection, creator } = useContext(AuthContext);
    const [collection, setcollection] = useState();
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [onUpdate, setOnUpdate] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const dataCollection = await getCollection(router.query.collection_id)
            setcollection(dataCollection)
            const dataRecipes = await getRecipesCollection(router.query.collection_id)
            setRecipes(dataRecipes)
            setIsLoading(false)
        }
        onUpdate && setOnUpdate(false)
        fetchData();
    }, [router.query.collection_id, onUpdate])
    return (
        <>
            <ContainterXL>
                <div className="sticky mx-auto top-0">
                    <div className="flex justify-between py-6">
                        <h4 className="font-quicksand font-bold text-h4 text-gray-600">
                            {collection?.name}
                        </h4>
                        <div className="flex h-11 gap-3">
                            <Button color="SECONDARY" size="MEDIUM" onClick={() => setOpenEdit(true)}>
                                Edit Koleksi
                            </Button>
                            <Button color="SECONDARY" size="MEDIUM" onClick={() => setOpenDelete(true)}>
                                Hapus Koleksi
                            </Button>
                        </div>
                    </div>
                    {isLoading && <div className="grid justify-center w-full h-10">
                        Loading...
                    </div>}
                    <div className="grid grid-cols-4 gap-x-8 gap-y-11">
                        {recipes.map((recipe) => (
                            <CardRecipe onDelete={() => setOnUpdate(true)} recipe={recipe} path={`/creator/${creator.username}/recipes`} />
                        ))}
                    </div>
                </div>
                {openDelete && <DeleteCollection show={openDelete} onClose={setOpenDelete} collection_id={collection.id} />}
                {openEdit && <EditCollection show={openEdit} onClose={setOpenEdit} collection={collection} onUpdate={() => setOnUpdate(true)} />}
            </ContainterXL>


        </>

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
    return {
        props: {
        }
    }
}
export default DetailRecipe;