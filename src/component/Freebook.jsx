import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  // ✅ Filter only items with price === 0
  const filterData = list.filter((item) => item.price === 0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mb-6">
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p className="text-gray-600 text-sm">
          Browse through our collection of 100% free books to read and enjoy.
        </p>
      </div>

      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;

