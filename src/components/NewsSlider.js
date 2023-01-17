import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";

function NewsSlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => {
          return <SliderCard key={index} data={item} />;
        })}
      </Slider>
    </div>
  );
}

export default NewsSlider;
