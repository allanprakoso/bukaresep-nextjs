import Link from "next/link";
import { Star, Leve, Clock } from "../assets/icons";

const RecipePrev = ({ recipe }) => {
  return (
    <Link
      href="#"
      href={{
        pathname: "/creator/recipes/[id]",
        query: { id: recipe.id },
      }}
    >
      <a>
        <div className="carousel-item relative flex items-center justify-end my-8 mx-4">
          <div className="img-recipe absolute left-0 z-50 w-[548px] h-[389.3px]">
            <img
              src={recipe.image}
              alt="recipe"
              className="rounded-[20px] object-cover h-full"
            />
          </div>

          <div className="content-recipe flex flex-col justify-center py-24 px-20  w-[995px] h-[465px] pl-[440px] rounded-[12px] bg-white drop-shadow-xl mr-2">
            <h5 className="text-h5 text-brand-dark font-bold font-quicksand mb-3">
              {recipe.category}
            </h5>
            <h3 className="text-h3 text-gray-600 font-bold font-quicksand my-3 leading-[36.3px]">
              {recipe.title}
            </h3>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Star />
                    </svg>
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Star />
                    </svg>
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Star />
                    </svg>
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Star />
                    </svg>
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Star />
                    </svg>
                  </div>
                  <span className="ml-3 text-lg font-semibold text-amber-400">
                    {recipe.rating}
                  </span>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Clock />
                    </svg>
                    <span className="ml-2 text-lg font-semibold text-gray-600">
                      {recipe.time} menit
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Leve />
                    </svg>
                    <span className="ml-2 text-lg font-semibold text-gray-600">
                      {recipe.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-14">
              <img
                src={recipe.creatorProfile}
                className="w-14 h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-600">Penulis</p>
                <p className="text-lg text-gray-600">{recipe.creator}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecipePrev;
