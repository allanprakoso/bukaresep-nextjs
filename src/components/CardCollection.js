import Link from "next/Link";
const CardCollection = ({ collection, path }) => {
  return (
    <div className="font-inter max-2-xs text-gray-600 mx-auto">

      <a>
        <div className="bg-white rounded-lg w-64 pb-8">
          <div className="grid gap-1 grid-rows-2 grid-flow-col h-48">
            <div className="row-span-2 col-span-2">
              <img
                src={collection.images[0]}
                alt="recipe"
                className="rounded-l-lg object-cover h-full"
              />
            </div>
            <div className="col-span-1">
              <img
                src={collection.images[1]}
                alt="recipe"
                className="rounded-tr-lg object-cover h-full"
              />
            </div>
            <div className="col-span-1">
              <img
                src={collection.images[2]}
                alt="recipe"
                className="rounded-br-lg object-cover h-full"
              />
            </div>
          </div>

          <div className="mt-4">
            <Link
              href={{
                pathname: `${path}/${collection.id}`,
              }}>
              <a>
                <p className="mb-auto text-gray-800 text-lg font-semibold truncate">
                  {collection.name}
                </p>
              </a>
            </Link>

            <div className="flex text-sm space-x-1 font-regular mt-2">
              {
                collection.categories.map((category, index) => (
                  <>
                    <span key={index}>{category.count} {category.name}</span>
                    {index !== collection.categories.length - 1 && <span>·</span>}
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </a>

    </div>
  );
};

export default CardCollection;
