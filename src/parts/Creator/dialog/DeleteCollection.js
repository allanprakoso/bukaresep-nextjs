import Button from "../../../components/Button";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";

const DeleteCollection = () => {
  return (
    <Modal close={close}>
      <ModalTitle>Hapus Koleksi</ModalTitle>
      <ModalContent>
        <p className="text-lg text-gray-800">
          Kamu yakin ingin menghapus koleksi ini?
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

export default DeleteCollection;
