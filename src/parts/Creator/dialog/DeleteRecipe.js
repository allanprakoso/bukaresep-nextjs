import Button from "../../../components/Button";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";

const DeleteRecipe = () => {
  return (
    <Modal>
      <ModalTitle>Hapus Resep</ModalTitle>
      <ModalContent>
        <p className="text-lg text-gray-800">
          Kamu yakin ingin menghapus resep ini?
        </p>

        <div className="flex space-x-3">
          <Button size="LONG">Hapus</Button>
          <Button color="SECONDARY" size="LONG">
            Batal
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DeleteRecipe;
