import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";
import ItemCollectionSelection from "../../../components/ItemCollectionSelection";
import Button from "../../../components/Button.js";
import { Plusl } from "../../../assets/icons/index.js";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/CreatorAuthContext";
import { InputText } from "../../../components/InputField";


const AddRecipetoCollection = ({ onClose, show, recipe_id }) => {
  const { addRecipeToCollection, createNewCollection, getCollections } = useContext(AuthContext);
  const [index, setIndex] = useState(0);
  const [nameCollection, setNamecollection] = useState("");
  const [collections, setCollections] = useState([]);

  const saveToCollection = async (collection_id) => {
    console.log(collection_id);
    await addRecipeToCollection(recipe_id, collection_id);
    onClose(false);
    setIndex(0);
  }

  const saveToNewCollection = async () => {
    const id = await createNewCollection(nameCollection)
    await saveToCollection(id);
    setNamecollection("");
  }

  useEffect(() => {
    async function getData() {
      const data = await getCollections()
      setCollections(data);
    }
    getData();
  }, [index])


  return (
    <Modal onClose={onClose} show={show}>
      {index === 0 &&
        <>
          <ModalTitle>Simpan resep ke koleksi</ModalTitle>
          <ModalContent>
            <div>
              {collections.map((collection) => (
                <ItemCollectionSelection collection={collection} onSave={() => saveToCollection(collection.id)} />
              ))}
            </div>
            <div className="flex space-x-3">
              <Button onClick={() => setIndex(1)}>
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
        </>
      }

      {
        index === 1 &&
        <>
          <ModalTitle>Buat koleksi baru</ModalTitle>
          <ModalContent>
            <InputText
              name="name"
              value={nameCollection}
              onChange={(e) => setNamecollection(e.target.value)}
              placeholder="contoh: Resep ayam"
              label="Nama Koleksi"
            ></InputText>

            <Button size="LONG" onClick={saveToNewCollection}>Buat Koleksi</Button>
          </ModalContent>
        </>
      }
    </Modal>
  );
};

export default AddRecipetoCollection;
