import CardCollection from "../components/CardCollection";

export default function GridListCollection({ collections }) {

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-11">
      {collections.map((collection) => (
        <CardCollection collection={collection} />
      ))}
    </div>
  );
}
