import { Modal, ModalTitle, ModalContent, ModalFooter } from '../../components/ModalDialog.js';
import Button from '../../components/Button';
import { InputOption, InputText } from '../../components/InputField';
import { useState, useContext } from 'react';
import AuthContext from '../../context/CreatorAuthContext';

const RegisterForm = ({ onClose, show }) => {
    const { loginCreator, creator } = useContext(AuthContext)
    const [valueForm, setValue] = useState({
        username: "",
        password: "",
    });
    const onChange = (event) => {
        const { name, value } = event.target;
        setValue({ ...valueForm, [name]: value });
    };

    const onSubmit = async (e) => {
        await loginCreator(e);
        onClose();
    }

    return (
        <Modal
            onClose={onClose}
            show={show}
            title="Login"
        >
            <ModalTitle>Daftar</ModalTitle>
            <ModalContent>
                <form onSubmit={onSubmit}>
                    <div className="form-group grid grid-cols-1 gap-10">
                        <InputText
                            label="Nama Lengkap"
                            type="text"
                            value={valueForm.password}
                            name="fullname"
                            onChange={onChange}
                        />
                        <div>
                            <InputText
                                label="Alamat Email"
                                type="email"
                                value={valueForm.username}
                                name="email"
                                onChange={onChange}
                            /> <p className='text-sm text-gray-600 mt-2'>Contoh: inemuy@gmail.com</p>
                        </div>

                        <div>
                            <InputText
                                label="Password"
                                type="password"
                                //value={valueForm.password}
                                name="password"
                                onChange={onChange}
                            /> <p className='text-sm text-gray-600 mt-2'>Minimal 6 karakter</p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <InputOption
                                label="Saya setuju dengan kebijakan Bukaresep"
                                type="checkbox"
                                name="kebijakan"
                            />
                            <InputOption
                                label="Saya ingin menerima email rekomendasi resep dan berita Bukaresep"
                                type="checkbox"
                                name="kebijakan"
                            />
                        </div>
                        <Button size="LONG">Masuk</Button>
                    </div>
                </form>
            </ModalContent>
            <ModalFooter>
                <div className="grid gap-2 grid-cols-1 font-inter text-base text-gray-600">
                    <div className="flex gap-4 justify-center">
                        <p className="font-regular">Sudah punya akun?</p>
                        <p className="font-semibold text-brand-dark cursor-pointer" onClick={() => { console.log('test') }}>Masuk</p>
                    </div>
                </div>
            </ModalFooter>

        </Modal>
    );
}

export default RegisterForm;