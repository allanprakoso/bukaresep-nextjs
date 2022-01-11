import { Modal, ModalTitle, ModalContent, ModalFooter } from '../../components/ModalDialog.js';
import Button from '../../components/Button';
import { InputText } from '../../components/InputField';
import { useState, useContext } from 'react';
import AuthContext from '../../context/UserAuthContext';

const LoginForm = ({ onClose, show }) => {
    const { loginUser, user } = useContext(AuthContext)
    const [valueForm, setValue] = useState({
        username: "",
        password: "",
    });
    const onChange = (event) => {
        const { name, value } = event.target;
        setValue({ ...valueForm, [name]: value });
    };

    const onSubmit = async (e) => {
        await loginUser(e);
        onClose();
    }

    return (
        <Modal
            onClose={onClose}
            show={show}
            title="Login"
        >
            <ModalTitle>Login</ModalTitle>
            <ModalContent>
                <form onSubmit={onSubmit}>
                    <div className="form-group grid grid-cols-1 gap-10">
                        <InputText
                            label="Username"
                            type="text"
                            value={valueForm.username}
                            placeholder="username or email"
                            name="username"
                            onChange={onChange}
                        />
                        <InputText
                            label="Password"
                            type="password"
                            value={valueForm.password}
                            placeholder="password"
                            name="password"
                            onChange={onChange}
                        />
                        <Button size="LONG">Masuk</Button>
                    </div>
                </form>
            </ModalContent>
            <ModalFooter>
                <div className="grid gap-2 grid-cols-1 font-inter text-base text-gray-600">
                    <div className="flex gap-4">
                        <p className="font-regular">Lupa password?</p>
                        <p className="font-semibold text-brand-dark cursor-pointer" onClick={() => { console.log('test') }}>Reset</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-regular">Belum punya akun?</p>
                        <p className="font-semibold text-brand-dark cursor-pointer" onClick={() => { console.log('test') }}>Buat Akun</p>
                    </div>
                </div>
            </ModalFooter>

        </Modal>
    );
}

export default LoginForm;