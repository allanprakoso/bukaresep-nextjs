import {
  Modal,
  ModalTitle,
  ModalContent,
} from "../../../components/ModalDialog.js";
import ItemCollectionSelection from "../../../components/ItemCollectionSelection";
import Button from "../../../components/Button.js";
import { Plusl } from "../../../assets/icons/index.js";

const AddRecipetoCollection = () => {
  const collection = [
    {
      id: 1,
      title: "Inspirasi kreasi resep kayu manis",
      images: [
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
      ],
      categories: [
        {
          name: "Makanan",
          count: 2,
        },
        {
          name: "Cemilan",
          count: 2,
        },
        {
          name: "Minuman",
          count: 2,
        },
      ],
    },
    {
      id: 2,
      title: "Inspirasi kreasi resep kayu manis",
      images: [
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
      ],
      categories: [
        {
          name: "Makanan",
          count: 2,
        },
        {
          name: "Cemilan",
          count: 2,
        },
        {
          name: "Minuman",
          count: 2,
        },
      ],
    },
  ];

  return (
    <Modal>
      <ModalTitle>Simpan resep ke koleksi</ModalTitle>
      <ModalContent>
        <div>
          {collection.map((collection) => (
            <ItemCollectionSelection collection={collection} />
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
