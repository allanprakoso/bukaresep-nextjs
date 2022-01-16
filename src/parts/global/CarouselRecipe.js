import RecipePrev from "../../components/RecipePrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselRecipe = () => {
  const recipe = [
    {
      id: 1,
      title: "Gado gado",
      level: "Mudah",
      time: 5,
      rating: 5,
      category: "Makanan",
      creator: "olinuyi",
      image:
        "https://images.kitchenstories.io/wagtailOriginalImages/R2391-photo-final-1/R2391-photo-final-1-medium-landscape-150.jpg",
      creatorProfile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "Sate Ayam Madura Sambel Kacang",
      level: "Mudah",
      time: 10,
      rating: 4.8,
      category: "Makanan",
      creator: "olinuyi",
      image:
        "https://foto.kontan.co.id/8VMHUV3fUMZWlqO_AXfmbz07WFE=/smart/2012/07/10/291882201p.jpg",
      creatorProfile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
