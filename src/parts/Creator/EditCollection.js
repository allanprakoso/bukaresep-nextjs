import Button from "../../components/Button";
import { InputText } from "../../components/InputField";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../components/ModalDialog.js";

const EditCollection = () => {
  return (
    <Modal>
      <Modal close={close}>
        <ModalTitle>Edit Koleksi</ModalTitle>
        <ModalContent>
          <InputText
            name="name"
            placeholder="contoh: Resep ayam"
            label="Nama Koleksi"
          ></InputText>

          <Button size="LONG">Simpan</Button>
        </ModalContent>
      </Modal>
    </Modal>
  );
};

export default EditCollection;
