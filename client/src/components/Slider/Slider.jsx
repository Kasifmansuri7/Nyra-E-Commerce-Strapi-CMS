import React, { useState } from "react";
import "./Slider.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://i.ibb.co/09mwg4C/portrait-handsome-stylish-hipster-lambersexual-model.jpg",
    "https://i.ibb.co/8rj2gHf/young-woman-bxeautiful-dress-hat.jpg",
    "https://i.ibb.co/2vPsYw0/portrait-beautiful-model-sexy-female-dressed-summer-hipster-checkered-shirt-jeans-trendy-girl-posing.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (currentSlide > 0 ? prev - 1 : 2));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (currentSlide < 2 ? prev + 1 : 0));
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ChevronLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
