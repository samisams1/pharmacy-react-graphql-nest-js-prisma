import React from 'react'
import Data from '../Data.json'
import style from './homepage.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// There is already a carousal component in project. Change its name.
// We can easily make this a common compenent where in props we can pass dimensions and all hardcoded properties . 
//Customise such that in whole project this can be used a reusable component
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        height: "2rem",
        marginRight: "1rem",
        background: "black",
        width: "2rem",
        zIndex: 50,
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}
  
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        height: "2rem",
        marginRight: "1rem",
        background: "black",
        width: "2rem",
        zIndex: 50,
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}

const Carousal = () => {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive:[
          {
            breakpoint: 480,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
        ]
      };
  return (
    <div>
        <Slider {...settings}>
            
                    {Data.first_corausal.map((el)=>(
                      <div className={style.carousal} key={el.image}>
                        <img src={el.image} />
                      </div>
                    ))}
                    
               
            </Slider>
    </div>
  )
}

export default Carousal