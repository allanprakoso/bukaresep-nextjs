import Button from "../../../components/Button";
import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/CreatorAuthContext";

const DeleteCollection = ({ show, onClose, collection_id }) => {
  const router = useRouter();
  const { deleteCollection, creator } = useContext(AuthContext);
  return (
    <Modal onClose={onClose} show={show}>
      <ModalTitle>Hapus Koleksi</ModalTitle>
      <ModalContent>
        <p className="text-lg text-gray-800">
          Kamu yakin ingin menghapus koleksi ini?
        </p>

        <div className="flex space-x-3">
          <Button size="LONG" onClick={async () => {
            await deleteCollection(collection_id);
            onClose(false);
            router.push(`/creator/${creator.username}`)
          }}>Hapus</Button>
          <Button color="SECONDARY" size="LONG" onClick={() => onClose(false)}>
            Batal
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCollection;
