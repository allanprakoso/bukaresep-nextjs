import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";
import ItemCollectionSelection from "../../../components/ItemCollectionSelection";
import Button from "../../../components/Button.js";
import { Plusl } from "../../../assets/icons/index.js";
import { useEffect, useState } from "react";
import { useAxiosWithContext } from "../../../configs/creator/useAxios";

const AddRecipetoCollection = ({ close, show, recipe_id }) => {
  const [collections, setCollections] = useState([]);
  const api = useAxiosWithContext();
  useEffect(() => {
    async function getCollections() {
      const { data } = await api.get("/creator/collections");
      setCollections(data.collections);
    }
    getCollections();
  }, [])
  return (
    <Modal onClose={close} show={show}>
      <ModalTitle>Simpan resep ke koleksi</ModalTitle>
      <ModalContent>
        <div>
          {collections.map((collection) => (
            <ItemCollectionSelection collection={collection} recipe_id={recipe_id} />
          ))}
        </div>
        <div className="flex space-x-3">
          <Button>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <Plusl />
            </svg>
            Koleksi baru
          </Button>

          <Button color="SECONDARY">Lewati</Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default AddRecipetoCollection;
