import IngredientsForm from "../../parts/CrudRecipe/IngredientsForm"
import { useState } from 'react';
import Upload from "../../components/Upload";
import axios from 'axios';
import FormData from 'form-data';


const App = (props) => {
    const [imageInstructions, setImageInstruction] = useState([]);
    const [recipe, setRecipe] = useState(
        {
            name: "",
            url_image: "",
            group_ingredients: [],
            instructions: [],
            cooking_time: 0,
            serving: 0,
            category_id: 0,
            cuisiuse_id: 0,
            level_id: 0,
            tags: [],
        }
    );

    const handlerChangeUpload = (file) => {
        setImageInstruction([...imageInstructions, file]);
    }

    const onSubmit = async () => {
        let urls = [];
        var a = 0;
        for (const file of imageInstructions) {
            var formData = new FormData();
            console.log('datanya', imageInstructions);
            formData.append('data', file);
            try {
                const result = await axios.post('http://47.254.242.193:5000/upload/recipe',
                    formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                console.log('result', result);
            }
            catch (err) {
                console.log({ err });
            }
        }
    }

    const handleChangeIngredients = (ingredient) => {
        setRecipe({
            ...recipe,
            group_ingredients: ingredient
        });
    }
    return (
        <>
            <div className="h-128 w-7/12">
                <Upload onChange={file => handlerChangeUpload(file)} />
            </div>
            <div className="h-128 w-7/12">
                <Upload onChange={file => handlerChangeUpload(file)} />
            </div>
            <div className="w-7/12">
                <IngredientsForm units={props.units} onChange={ingredient => handleChangeIngredients(ingredient)} />
            </div>
            <p>{JSON.stringify(recipe, null, 2)}</p>
            <button onClick={onSubmit}>Submit</button>
        </>
    )
}


export async function getStaticProps() {
    const req = await axios.get('http://47.254.242.193:5000/unit').catch(() => {
        return { props: { units: [] } }
    });
    return { props: { units: req.data.results } }
}

export default App