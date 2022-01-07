import { useState } from 'react';
import { Picture } from '../assets/icons';

function Upload(props) {
    const [image, setImage] = useState();

    const handleFileSelected = (e) => {
        const files = e.target.files;
        (files.length > 0) ?
            setImage(URL.createObjectURL(files[0])) :
            setImage(undefined);
        props.onChange(files[0]);
    }

    return (
        <div className="font-inter text-gray-400 border relative bg-gray-50 h-full w-full rounded-lg ">
            <div className="flex justify-center absolute top-0 right-0 left-0 h-full w-full">
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

export default Upload;