import RecipePrev from "../../components/RecipePrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselRecipe = () => {
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
      creatorProfile:
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
      creatorProfile:
        "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    },
  ];

  // settings slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Slider {...settings}>
        {recipe.map((recipe) => (
          <RecipePrev recipe={recipe} />
        ))}
      </Slider>
    </>
  );
};

export default CarouselRecipe;
