import Link from "next/link";
import ContainerXL from "../../../components/ContainerXL"
import Button from "../../../components/Button"
import { DropdownMenu, DropdownItem } from "../../../components/Dropdown"
import { Menu } from '@headlessui/react'
import { InputText } from "../../../components/InputField"
import { useState, useContext, useEffect } from 'react';
import { Angle_down } from "../../../assets/icons";
import { useAxios, useAxiosWithContext } from '../../../configs/creator/useAxios';
import UploadImageProfile from "../../../utils/UploadImageRecipe";

import AuthContext from "../../../context/CreatorAuthContext";
import { set } from "js-cookie";

const EditProfile = () => {
    const api = useAxiosWithContext();
    const { creator } = useContext(AuthContext);

    const [valueForm, setValue] = useState({
        url_image: creator?.url_image ?? "",
        username: creator?.username ?? "",
        email: creator?.email ?? "",
        gender: creator?.gender ?? "",
        age: creator?.age ?? 0,
        front_name: creator?.front_name ?? "",
        last_name: creator?.last_name ?? "",
    });
    const [id, setId] = useState();
    const [alert, setAlert] = useState(undefined);
    const [image, setImage] = useState();
    const [files, setFiles] = useState()
    const [onUpdate, setOnUpdate] = useState(false);

    const handleFileSelected = (e) => {
        const files = e.target.files;
        (files.length > 0) ?
            setImage(URL.createObjectURL(files[0])) :
            setImage(undefined);
        setFiles(files);
    }

    const onChange = (event) => {
        valueForm[event.target.name] = event.target.value;
        setValue({ ...valueForm });
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if (files) {
            const url_image = await UploadImageProfile(files[0]);
            valueForm.url_image = url_image;
        }
        delete valueForm['id'];
        Object.keys(valueForm).forEach(key => {
            if (valueForm[key] === null)
                delete valueForm[key];
        });

        await api.put(`/creators/${id}`, JSON.stringify(valueForm))
            .then((res) => {
                setAlert('success');
                setTimeout(function () {
                    setAlert(undefined);
                }, 3000);
            })
            .catch(err => {
                setAlert('error');
                setTimeout(function () {
                    setAlert(undefined);
                }, 3000);
            })
        setOnUpdate(true);
    }

    useEffect(() => {
        if (creator) {
            async function getData() {
                const data = await fetch(`http://47.254.242.193:5000/creators/${creator.id}`);
                const json = await data.json();
                setImage(json.data.creator.url_image);
                setValue(json.data.creator);
            }
            getData();
            setId(creator.id);
        };
        setOnUpdate(false);
    }, [creator, onUpdate]
    )
    const [isOpen, setIsOpen] = useState();
    const genderOption = [
        { value: "F", label: "Wanita", name: "Wanita" },
        { value: "P", label: "Pria", name: "Pria" },
    ];

    return (
        <ContainerXL>
            <div className="flex flex-row">
                <div className="basis-3/12 border-r-[1px]">
                    <h4 className="text-h4 font-quicksand font-bold text-gray-800">Pengaturan Akun</h4>
                    <div className="my-10 flex flex-col space-y-8">
                        <Link href="#"><a className="text-base font-semibold hover:text-brand-dark text-brand-dark">Ubah Biodata</a></Link>
                        <Link href="#"><a className="text-base font-semibold hover:text-brand-dark text-gray-600">Notifikasi</a></Link>
                        <Link href="#"><a className="text-base font-semibold hover:text-brand-dark text-gray-600">Ganti Password</a></Link>
                        <Link href="#"><a className="text-base font-semibold hover:text-brand-dark text-gray-600">Hapus Akun</a></Link>
                    </div>
                </div>
                <div className="basis-8/12 ml-16">
                    <h5 className="text-h5 font-quicksand font-bold text-gray-800">Ubah Biodata</h5>
                    <p className="text-sm text-gray-600">Atur data diri yang ingin kamu tampilkan</p>

                    <div className="avatar">
                        <p className="pb-4 pt-10 text-lg text-gray-600 font-semibold">Foto Profil</p>
                        <div className="flex space-x-5 items-center">
                            <div>
                                <img src={image} className="w-24 h-24 rounded-full object-cover" />
                            </div>
                            <div className="flex space-x-3">
                                <Button>
                                    <label className="cursor-pointer">
                                        <span className="mt-2 text-base leading-normal cursor-pointer">Pilih Foto</span>
                                        <input type='file' onChange={handleFileSelected} accept="image/png, image/jpeg" className="hidden" />
                                    </label>
                                </Button>
                                <Button color="SECONDARY">Hapus foto</Button>
                            </div>
                        </div>
                    </div>

                    <form className="pt-14 flex flex-col space-y-14 mb-16">
                        <InputText
                            name="username"
                            value={valueForm.username}
                            type="text"
                            label="Username"
                            placeholder="Username"
                            onChange={onChange}
                        />
                        <InputText
                            name="front_name"
                            value={valueForm.front_name}
                            type="text"
                            label="Nama Depan"
                            placeholder="Nama Depan"
                            onChange={onChange}
                        />
                        <InputText
                            name="last_name"
                            value={valueForm.last_name}
                            type="text"
                            label="Nama Belakang"
                            placeholder="Nama Belakang"
                            onChange={onChange}
                        />
                        <InputText
                            name="email"
                            value={valueForm.email}
                            type="email"
                            label="Alamat Email"
                            placeholder="Alamat Email"
                            onChange={onChange}
                        />
                        <InputText
                            name="age"
                            value={valueForm.age}
                            type="number"
                            label="Umur"
                            placeholder="Umur"
                            onChange={onChange}
                        />

                        <div className="custom-select flex flex-col">
                            <label className="text-gray-600 font-semibold text-lg mb-2">Jenis Kelamin</label>
                            <div>
                                <select name="gender"
                                    value={valueForm.gender}
                                    onChange={onChange}
                                    className="appearance-none border-[1.4px] border-gray-400 rounded-md w-full py-3 px-4 font-medium text-gray-600 focus:outline-gray-600">
                                    {genderOption.map((genderOption) => (
                                        <option value={genderOption.value}>{genderOption.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </form>
                    <Button size="LARGE" onClick={onSubmit}>Simpan Perubahan</Button>
                </div>
            </div>


            {alert == "success" && <div className="success w-full fixed top-0 left-0 h-14 bg-emerald-500 flex justify-center text-white items-center text-lg font-semibold">Profil berhasil di update</div>}
            {alert == "error" && <div className="un-success w-full fixed top-0 left-0 h-14 bg-red-500 flex justify-center text-white items-center text-lg font-semibold">Profil gagal di update, pastikan anda terkoneksi internet</div>}
        </ContainerXL>
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
export default EditProfile;