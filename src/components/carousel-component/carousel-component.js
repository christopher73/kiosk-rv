import React from "react";
import Slider from "react-slick";
import Img1 from "./assets/pic1.png";
import Img2 from "./assets/pic2.png";
import Img3 from "./assets/pic3.png";
import "./style.css";
export const CarouselComponent = () => {
  const settings = {
    dots: false,
    accessibility: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="welcome-background">
      <Slider {...settings}>
        <div className="background">
          <img className="carousel-img" src={Img1} alt="Img1" />
        </div>
        <div className="background">
          <img className="carousel-img" src={Img2} alt="Img2" />
        </div>
        <div className="background">
          <img className="carousel-img" src={Img3} alt="Img3" />
        </div>
      </Slider>
    </div>
  );
};
