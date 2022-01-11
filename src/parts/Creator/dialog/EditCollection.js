import Button from "../../../components/Button";
import { InputText } from "../../../components/InputField";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/CreatorAuthContext";

const EditCollection = ({ show, onClose, collection, onUpdate }) => {
  const [name, setName] = useState(collection.name);
  const { editCollection } = useContext(AuthContext);
  return (
    <Modal onClose={onClose} show={show}>
      <ModalTitle>Edit Koleksi</ModalTitle>
      <ModalContent>
        <InputText
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="contoh: Resep ayam"
          label="Nama Koleksi"
        ></InputText>

        <Button size="LONG" onClick={async () => {
          await editCollection(collection.id, name);
          onUpdate();
          onClose(false);
        }}>Simpan</Button>
      </ModalContent>
    </Modal>
  );
};

export default EditCollection;
