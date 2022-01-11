import Link from "next/link";
import ContainerXL from "../../../components/ContainerXL"
import Button from "../../../components/Button"
import { DropdownMenu, DropdownItem } from "../../../components/Dropdown"
import { Menu } from '@headlessui/react'
import { InputText } from "../../../components/InputField"
import { useState, useContext, useEffect } from 'react';
import { Angle_down } from "../../../assets/icons";
import { useAxios, useAxiosWithContext } from '../../../configs/creator/useAxios';


import AuthContext from "../../../context/CreatorAuthContext";

const EditProfile = () => {
    const api = useAxiosWithContext();
    const { creator } = useContext(AuthContext);

    const [valueForm, setValue] = useState({
        username: creator?.username ?? "",
        email: creator?.email ?? "",
        gender: creator?.gender ?? "",
        age: creator?.age ?? 0,
        front_name: creator?.front_name ?? "",
        last_name: creator?.last_name ?? "",
    });
    const [id, setId] = useState();

    const onChange = (event) => {
        valueForm[event.target.name] = event.target.value;
        setValue({ ...valueForm });
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        delete valueForm['id'];
        Object.keys(valueForm).forEach(key => {
            if (valueForm[key] === null)
                delete valueForm[key];
        });
        await api.put(`/creators/${id}`, JSON.stringify(valueForm)).catch(err => {
            console.error('error')
        })
    }

    useEffect(() => {
        if (creator) {
            setId(creator.id);
            setValue(creator)
        };
    }, [creator]
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
                                <img src="/pic/lp3.jpg" className="w-24 h-24 rounded-full object-cover" />
                            </div>
                            <div className="flex space-x-3">
                                <Button>Pilih foto baru</Button>
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

            <div className="alert hidden">
                <div className="success w-full absolute top-[72px] left-0 h-14 bg-emerald-500 flex justify-center text-white items-center text-lg font-semibold">Profil berhasil di update</div>
                <div className="un-success w-full absolute top-[72px] left-0 h-14 bg-red-500 flex justify-center text-white items-center text-lg font-semibold">Profil gagal di update, pastikan anda terkoneksi internet</div>
            </div>
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