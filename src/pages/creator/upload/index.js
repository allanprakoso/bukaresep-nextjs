import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/CreatorAuthContext"
import { InputText, InputOption } from "../../../components/InputField";
import InstructionsForm from "../../../parts/CrudRecipe/InstructionsForm";
import IngredientsForm from "../../../parts/CrudRecipe/IngredientsForm";
import { useRouter } from "next/router";
import Upload from "../../../components/Upload";
import Button from "../../../components/Button";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "../../../components/ModalDialog";
<<<<<<< HEAD
<<<<<<< HEAD
=======

export async function getServerSideProps() {
    const req = await fetch('http://47.254.242.193:5000/unit').catch(() => {
        return { props: { units: [] } }
    });
    const data = await req.json();
    return { props: { units: data.results } }
}

export default function Home(props) {
    const [recipe, setRecipe] = useState({
        name: "Ayam Ayaman",
        url_image: "",
        group_ingredients: [],
        instructions: [],
        cooking_time: 0,
        serving: 1,
        category_id: 0,
        cuisiuse_id: 0,
        level_id: 0,
        tags: [],
    })
    const [image, setImage] = useState(null);
    const [openAtribute, setOpenAtribute] = useState(true);
=======
>>>>>>> origin/olin
import UploadImageRecipe from "../../../utils/UploadImageRecipe";
import { Angle_right } from "../../../assets/icons";
import useAxios from "../../../configs/creator/useAxios";
export default function UploadRecipe(props) {
    const api = useAxios();
    const [recipe, setRecipe] = useState({
        name: "",
        status: "published",
        url_image: "",
        group_ingredients: [],
        instructions: [{ step: "1", instruction: '', file_image: null, url_image: '' }],
        cooking_time: 1,
        serving: 1,
        category_id: 1,
        cuisine_id: 1,
        level_id: 1,
        tags: ['tea'],
    })
    const [isLoading, setIsLoading] = useState(false);

    const [image, setImage] = useState(null);
    const [openAtribute, setOpenAtribute] = useState(false);

    async function UploadRecipe() {
        setIsLoading(true);
        if (image) {
            const url_image = await UploadImageRecipe(image);
            recipe.url_image = url_image;
        }
        for (const [index, instruction] of recipe.instructions.entries()) {
            if (instruction.file_image) {
                const url_image = await UploadImageRecipe(instruction.file_image);
                console.log(url_image);
                recipe.instructions[index].url_image = url_image;
                delete recipe.instructions[index].file_image;
                setRecipe(recipe);
            }
        }
        const data = JSON.stringify(recipe);
        await api.post('/creator/recipes', data).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
        return setIsLoading(false);
    }

<<<<<<< HEAD
=======

export async function getServerSideProps() {
    const req = await fetch('http://47.254.242.193:5000/unit').catch(() => {
        return { props: { units: [] } }
    });
    const data = await req.json();
    return { props: { units: data.results } }
}

export default function Home(props) {
    const [recipe, setRecipe] = useState({
        name: "Ayam Ayaman",
        url_image: "",
        group_ingredients: [],
        instructions: [],
        cooking_time: 0,
        serving: 1,
        category_id: 0,
        cuisiuse_id: 0,
        level_id: 0,
        tags: [],
    })
    const [image, setImage] = useState(null);
    const [openAtribute, setOpenAtribute] = useState(true);
>>>>>>> origin/olin
=======
>>>>>>> origin/allan
>>>>>>> origin/olin

    const onChangeForm = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value })
    }
    const handleChangeInstruction = (instruction) => {
        setRecipe({ ...recipe, instructions: instruction })
    }
    const handleChangeIngredients = (ingredients) => {
        setRecipe({ ...recipe, group_ingredients: ingredients })
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/olin
    const submitImagesInstuctions = async (instructions) => {

    }

<<<<<<< HEAD
>>>>>>> origin/olin
=======
=======
>>>>>>> origin/allan
>>>>>>> origin/olin
    return (
        <>
            <div className="space-y-10 mt-32 container mx-auto relative">
                <div className="flex justify-between">
                    <h1 className="font-quicksand font-bold text-h1 text-gray-800">
                        Buat Resep
                    </h1>
                    <div className="flex h-11 gap-3">
                        <Button color="SECONDARY" size="MEDIUM">Simpan Draft</Button>
                        <Button size="MEDIUM" onClick={() => setOpenAtribute(true)}>Selanjutnya</Button>
                    </div>
                </div>
                <div className="grid gap-10 grid-cols-1 lg:px-[205px] mx-auto">
                    <section>
                        <h3 className="font-quicksand font-bold text-h3 text-gray-600">Nama Masakan</h3>
                        <InputText name="name" placeholder="Nama Masakan" onChange={onChangeForm} ></InputText>
                    </section>
                    <section>
                        <h3 className="font-quicksand font-bold text-h3 text-gray-600">Foto Masakan</h3>
                        <div className="h-128">
                            <Upload onChange={file => setImage(file)} />
                        </div>
                    </section>

                    <section name="ingredients">
                        <h3 className="font-quicksand font-bold text-h3 text-gray-600">Bahan</h3>
                        <IngredientsForm
<<<<<<< HEAD
<<<<<<< HEAD
=======
                            units={props.units}
>>>>>>> origin/olin
=======
                            units={props.units}
=======
>>>>>>> origin/allan
>>>>>>> origin/olin
                            onChange={ingredient => handleChangeIngredients(ingredient)}
                        />
                    </section>
                    <section name="instruction">
                        <h3 className="font-quicksand font-bold text-h3 text-gray-600">Cara Membuat</h3>
                        <InstructionsForm
                            onChange={instruction => handleChangeInstruction(instruction)} />
                    </section>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p>{JSON.stringify(recipe)}</p>
=======
>>>>>>> origin/olin
=======
=======
                    <p>{JSON.stringify(recipe)}</p>
>>>>>>> origin/allan
>>>>>>> origin/olin
                </div>
            </div>

            {openAtribute && <Modal close={() => setOpenAtribute(false)}>
                <ModalTitle>{recipe.name}</ModalTitle>
                <ModalContent>
                    <form>
                        <div className="text-lg font-inter font font-semibold gap-y-6 text-gray-600 grid grid-flow-row-dense grid-cols-3 row-auto justify-between align-middle">
                            <label className="my-auto col-span-2">Porsi Saji</label>
                            <InputText name="serving" type="number" value={recipe.serving} placeholder="Porsi Saji" onChange={onChangeForm}></InputText>
                            <label className="my-auto col-span-2">Waktu yang dibutuhkan</label>
                            <InputText name="cooking_time" type="number" value={recipe.cooking_time} placeholder="Waktu yang dibutuhkan" onChange={onChangeForm}></InputText>
                            <label className="my-auto w-fit">Kategori resep</label>
                            <div className="ml-2 grid grid-cols-3 col-span-2">
                                <InputOption type="radio" name="category_id" label="Makanan" value={1} onChange={onChangeForm} />
                                <InputOption type="radio" name="category_id" label="Minuman" value={2} onChange={onChangeForm} />
                                <InputOption type="radio" name="category_id" label="Cemilan" value={3} onChange={onChangeForm} />
                            </div>
                            <label className="my-auto">Tingkat kesulitan</label>
                            <div className="ml-2 grid grid-cols-3 col-span-2">
                                <InputOption type="radio" name="level_id" label="Mudah" value={1} onChange={onChangeForm} />
                                <InputOption type="radio" name="level_id" label="Sedang" value={2} onChange={onChangeForm} />
                                <InputOption type="radio" name="level_id" label="Sulit" value={3} onChange={onChangeForm} />
                            </div>
                        </div>
                    </form>
                </ModalContent>
                <ModalFooter>
                    <div className="w-full grid grid-cols-1 gap-y-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        <Button size="LONG" onClick={() => setOpenAtribute(false)}>Unggah Resep</Button>
                        <Button color="SECONDARY" size="LONG" onClick={() => setOpenAtribute(false)}>Simpan Draft</Button>
=======
>>>>>>> origin/olin
                        <Button size="LONG" onClick={async () => {
                            await UploadRecipe();
                            setOpenAtribute(false)
                        }}>
                            {isLoading ?
                                <div className="flex justify-center">

                                    <svg
                                        className="animate-spin h-5 w-5 mr-3"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <Angle_right />
                                    </svg>
                                    <span>Mengupload Resep</span>
                                </div> :
                                <>Unggah Resep</>}
                        </Button>
                        <Button color="SECONDARY" size="LONG" onClick={() => setOpenAtribute(false)}>
                            Simpan Draft
                        </Button>
<<<<<<< HEAD
=======
                        <Button size="LONG" onClick={() => setOpenAtribute(false)}>Unggah Resep</Button>
                        <Button color="SECONDARY" size="LONG" onClick={() => setOpenAtribute(false)}>Simpan Draft</Button>
>>>>>>> origin/olin
=======
>>>>>>> origin/allan
>>>>>>> origin/olin
                        <Button color="NOBG" size="LONG" onClick={() => setOpenAtribute(false)}>Lihat Priview</Button>
                    </div>
                </ModalFooter>
            </Modal>}
        </>
    );
}

