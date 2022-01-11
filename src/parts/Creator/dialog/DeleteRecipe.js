import Button from "../../../components/Button";
import AuthContext from "../../../context/CreatorAuthContext";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";
import { useContext } from 'react'
import { useRouter } from "next/router";


const DeleteRecipe = ({ show, onClose, recipe_id, onDelete }) => {
  const router = useRouter();
  const { deleteRecipe } = useContext(AuthContext);
  return (
    <Modal onClose={onClose} show={show} >
      <ModalTitle>Hapus Resep</ModalTitle>
      <ModalContent>
        <p className="text-lg text-gray-800">
          Kamu yakin ingin menghapus resep ini?
        </p>

        <div className="flex space-x-3">
          <Button onClick={async () => {
            await deleteRecipe(recipe_id);
            onDelete();
            onClose(false);
          }} size="LONG">Hapus</Button>
          <Button color="SECONDARY" size="LONG" onClick={() => onClose(false)}>
            Batal
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DeleteRecipe;
