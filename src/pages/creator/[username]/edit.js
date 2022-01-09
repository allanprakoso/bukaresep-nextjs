import Link from "next/link";
import ContainerXL from "../../../components/ContainerXL"
import Button from "../../../components/Button"
import {DropdownMenu, DropdownItem} from "../../../components/Dropdown"
import { Menu } from '@headlessui/react'
import { InputText } from "../../../components/InputField"
import { useState } from 'react';
import { Angle_down } from "../../../assets/icons";

const EditProfile = () => {
    const [valueForm, setValue] = useState({
        username: "",
    });
    
    const onChange = (event) => {
        const { name, value } = event.target;
         setValue({ ...valueForm, [name]: value }); 
    };

    const [isOpen, setIsOpen] = useState(false);
    
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
                                 <img src="/pic/lp3.jpg" className="w-24 h-24 rounded-full object-cover"/>
                           </div>
                            <div className="flex space-x-3">
                                <Button>Pilih foto baru</Button>
                                <Button color="SECONDARY">Hapus foto</Button>
                            </div>
                        </div>
                    </div>

                    <form className="pt-14 flex flex-col space-y-14">
                        <InputText
                            name="username"
                            value={valueForm.username}
                            type="text"
                            label="Username"
                            placeholder="usernamenya user"
                            onChange={onChange}
                        />
                        <InputText
                            name="fullname"
                            value={valueForm.fullname}
                            type="text"
                            label="Nama Lengkap"
                            placeholder="Namanya si user"
                            onChange={onChange}
                        />
                        <InputText
                            name="email"
                            value={valueForm.email}
                            type="email"
                            label="Alamat Email"
                            placeholder="alamat emailnya si user"
                            onChange={onChange}
                        />
                        <div>
                            <p className="text-gray-600 font-semibold text-lg"> Jenis Kelamin</p>
                            <div onClick={() => setIsOpen(true)} className="border-[1.4px] border-gray-400 rounded-md w-full py-3 px-4 mt-2 text-base font-medium text-gray-400 focus:outline-gray-600 flex justify-between items-center cursor-pointer">
                                Wanita
                                <svg
                                    fill="#9FA3AF"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                    transform="translate(0,0) scale(-1, 1)">
                                    <Angle_down/>
                                </svg>
                            </div>
                            
                            {isOpen && (
                                <DropdownMenu size="FULL" onClick={() => setIsOpen(false)}>
                                    <DropdownItem>Wanita</DropdownItem>
                                    <DropdownItem>Pria</DropdownItem>
                                </DropdownMenu>
                            )}
                        </div>
                       
                        <InputText
                            name="umur"
                            value={valueForm.age}
                            type="text"
                            label="Umur"
                            placeholder="100"
                            onChange={onChange}
                        />
                    </form>

                </div>
            </div>
        </ContainerXL>
     );
}
 
export default EditProfile;