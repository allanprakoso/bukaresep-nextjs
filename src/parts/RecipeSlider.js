import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardRecipe from "../components/CardRecipe";
import { Angle_right } from "../assets/icons";

function RecipeSlider() {
  const recipe = [
    {
      id: 1,
      title: "Udang Goreng Tepung Saus Asam Manis",
      level: "Mudah",
      time: 30,
      rating: 4.5,
      category: "Makanan",
      creator: "Inem Susanti",
      image:
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    },
    {
      id: 2,
      title: "Udang Goreng Tepung Saus Asam Manis",
      level: "Mudah",
      time: 30,
      rating: 4.5,
      category: "Makanan",
      creator: "Inem Susanti",
      image:
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    },
    {
      id: 3,
      title: "Udang Goreng Tepung Saus Asam Manis",
      level: "Mudah",
      time: 30,
      rating: 4.5,
      category: "Makanan",
      creator: "Inem Susanti",
      image:
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    },
    {
      id: 4,
      title: "Udang Goreng Tepung Saus Asam Manis",
      level: "Mudah",
      time: 30,
      rating: 4.5,
      category: "Makanan",
      creator: "Inem Susanti",
      image:
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    },
    {
      id: 5,
      title: "Udang Goreng Tepung Saus Asam Manis",
      level: "Mudah",
      time: 30,
      rating: 4.5,
      category: "Makanan",
      creator: "Inem Susanti",
      image:
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    },
  ];

  //custom nextButton
  const ArrowRight = ({ onClick }) => (
    <div className="absolute top-[160px] right-[-20px]">
      <button
        onClick={onClick}
        className="flex items-center justify-center w-8 h-8 bg-white rounded-full border-[1.6px] border-gray-300"
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Angle_right />
        </svg>
      </button>
    </div>
  );

  // settings slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <ArrowRight />,
    className: "pb-8",
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {recipe.map((recipe) => (
          <CardRecipe recipe={recipe} />
        ))}
      </Slider>
    </div>
  );
}

export default RecipeSlider;
