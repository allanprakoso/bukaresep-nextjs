import React, { useState } from "react";
import { Picture } from "../../assets/icons"
import axios from 'axios';
import FormData from 'form-data';
// var formData = new FormData();
// formData.append("data", e.target.files[0]);
// axios.post('http://47.254.242.193:5000/upload/recipe',
//     formData, {
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// }
// ).then(res => {
//     console.log({ res });
// })
//     .catch(err => {
//         console.error({ err });
//     });

function Child(props) {
    const [image, setImage] = useState();
    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        console.log("files:", files);
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0]);
            setImage(url);
        } else {
            setImage(undefined);
        }
        return props.changeWord(url);
    }

    return (
        <div className="font-inter text-gray-400 border relative bg-gray-50 h-full w-full rounded-lg ">
            <div class="flex justify-center absolute top-0 right-0 left-0 h-full w-full">
                {(image == undefined) ?
                    <div className="grid content-center">
                        <svg className="mx-auto" width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <Picture />
                        </svg>
                        <p className="mx-auto mt-5 text-lg font-semibold">Upload File</p>
                        <p className="mx-auto text-sm font-regular">Resolusi foto 3:2 (600x400) atau lebih</p>
                    </div>
                    : <img src={image} className="h-full w-full object-cover rounded-lg" ></img>
                }
            </div>
            <input className="cursor-pointer relative block opacity-0 w-full h-full"
                type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"
                onChange={handleFileSelected} />
        </div>
    )
}

export default Child;