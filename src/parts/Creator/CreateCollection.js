import Button from "../../components/Button";
import { InputText } from "../../components/InputField";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../components/ModalDialog.js";

const CreateCollection = () => {
  return (
    <Modal>
      <Modal close={close}>
        <ModalTitle>Buat koleksi baru</ModalTitle>
        <ModalContent>
          <InputText
            name="name"
            placeholder="contoh: Resep ayam"
            label="Nama Koleksi"
          ></InputText>

          <Button size="LONG">Buat Koleksi</Button>
        </ModalContent>
      </Modal>
    </Modal>
  );
};

export default CreateCollection;
