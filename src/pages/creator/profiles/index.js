import { useAxios, useAxiosWithContext } from '../../../configs/creator/useAxios';
import GridListRecipe from '../../../parts/GridListRecipe';
import GridListCollection from '../../../parts/GridListCollection';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { Tab } from '@headlessui/react'
import { Share } from '../../../assets/icons';

const Profiles = (props) => {
    const api = useAxiosWithContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [tabIndex, setTabIndex] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [drafts, setDrafts] = useState([])
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            switch (tabIndex) {
                case 0:
                    await api.get('/creator/collections').then(res => setCollections(res.data.collections))
                        .catch((_) => setCollections([]));
                    break;
                case 1:
                    await api.get('/creator/recipes').then(res => setRecipes(res.data.results)).catch((_) => setRecipes([]));
                    break;
                case 2:
                    await api.get('/creator/recipes/drafts').then(res => setDrafts(res.data.results)).catch((_) => setDrafts([]));
                    break;
                default:
                    break;
            }
            setLoading(false);
        };
        fetchData();
    }, [tabIndex]);

    return (
        <div className="mt-16 md:mt-24 xl:mx-[22.5rem] lg:mx-14 md:mx-10 sm:mx-4">
            <div class="flex justify-center gap-7 pb-24 pt-12">
                <div className="my-auto">
                    <img src="https://i.pravatar.cc/300" class="rounded-full h-[100px] w-[100px]" />
                </div>
                <div>
                    <h1 class="text-h1 font-bold font-quicksand mb-4">Poniem Olino</h1>
                    <div className="flex gap-3">
                        <Button color="SECONDARY" size="MEDIUM">Edit Profil</Button>
                        <Button color="SECONDARY" size="MEDIUM">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Share />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            <Tab.Group onChange={(index) => {
                setTabIndex(index);
            }} >
                <div className="border-b-[0.8px] border-gray-300 mb-6">
                    <Tab.List>
                        <div className="flex gap-14 text-base font-inter font-medium font-gray-600">
                            <Tab className={({ selected }) =>
                                selected ? "border-b-2 border-brand-dark text-brand-dark" : ''}>Koleksi</Tab>
                            <Tab className={({ selected }) =>
                                selected ? "border-b-2 border-brand-dark text-brand-dark" : ''}>Semua Resep</Tab>
                            <Tab className={({ selected }) =>
                                selected ? "border-b-2 border-brand-dark text-brand-dark" : ''}>Draft</Tab>
                        </div>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    {loading && <div className="text-center text-gray-600 h-[500px]">Loading...</div>}
                    <Tab.Panel>
                        {(tabIndex === 0 && !loading) && <GridListCollection collections={collections} />}
                    </Tab.Panel>
                    <Tab.Panel>
                        {(tabIndex === 1 && !loading) && <GridListRecipe recipes={recipes} />}
                    </Tab.Panel>
                    <Tab.Panel>
                        {(tabIndex === 2 && !loading) && <GridListRecipe recipes={drafts} />}
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
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
    return {
        props: {}
    }
}
export default Profiles;