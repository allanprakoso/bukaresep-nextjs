import FormData from "form-data";
import axios from "axios";

const UploadImageProfile = async (file) => {
    let formData = new FormData();
    formData.append('data', file);
    const res = await axios.post("http://47.254.242.193:5000/upload/profile",
        formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).catch(err => { throw err });
    return res.data.data.pictureUrl;
}

export default UploadImageProfile;