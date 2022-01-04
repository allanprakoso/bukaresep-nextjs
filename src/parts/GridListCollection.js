import CardCollection from "../components/CardCollection";

export default function GridListCollection() {
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
      title: "Inspirasi kreasi resep dududu",
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
    <div className="grid grid-cols-4 gap-x-8 gap-y-11">
      {collection.map((collection) => (
        <CardCollection collection={collection} />
      ))}
    </div>
  );
}
