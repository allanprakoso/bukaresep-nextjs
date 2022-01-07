import FormData from "form-data";
import axios from "axios";

const UploadImageRecipe = async (file) => {
    let formData = new FormData();
    formData.append('data', file);
    const res = await axios.post("http://47.254.242.193:5000/upload/recipe",
        formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).catch(err => { throw err });
    return res.data.data.pictureUrl;
}

export default UploadImageRecipe;