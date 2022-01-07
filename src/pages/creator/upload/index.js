import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/CreatorAuthContext"
import { InputText, InputOption } from "../../../components/InputField";
import InstructionsForm from "../../../parts/CrudRecipe/InstructionsForm";
import IngredientsForm from "../../../parts/CrudRecipe/IngredientsForm";
import { useRouter } from "next/router";
import Upload from "../../../components/Upload";
import Button from "../../../components/Button";
import { Modal, ModalTitle, ModalContent, ModalFooter } from "../../../components/ModalDialog";

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

    const onChangeForm = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value })
    }
    const handleChangeInstruction = (instruction) => {
        setRecipe({ ...recipe, instructions: instruction })
    }
    const handleChangeIngredients = (ingredients) => {
        setRecipe({ ...recipe, group_ingredients: ingredients })
    }

    const submitImagesInstuctions = async (instructions) => {

    }

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
                            units={props.units}
                            onChange={ingredient => handleChangeIngredients(ingredient)}
                        />
                    </section>
                    <section name="instruction">
                        <h3 className="font-quicksand font-bold text-h3 text-gray-600">Cara Membuat</h3>
                        <InstructionsForm
                            onChange={instruction => handleChangeInstruction(instruction)} />
                    </section>
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
                        <Button size="LONG" onClick={() => setOpenAtribute(false)}>Unggah Resep</Button>
                        <Button color="SECONDARY" size="LONG" onClick={() => setOpenAtribute(false)}>Simpan Draft</Button>
                        <Button color="NOBG" size="LONG" onClick={() => setOpenAtribute(false)}>Lihat Priview</Button>
                    </div>
                </ModalFooter>
            </Modal>}
        </>
    );
}

