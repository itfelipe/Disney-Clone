import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

  const slider = [
    '/images/slider-badging.jpg',
    '/images/slider-badag.jpg',
    '/images/slider-scales.jpg',
    '/images/slider-scale.jpg'
  ];


  let settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true

  }

  return (

      <Carousel {...settings}>   
        {slider.map(item=>(
           <Wrap>
           <img src={item}/>
         </Wrap>
        ))}
     </Carousel>
  )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
      &:before {
        font-size: 10px;
        color: rgb(150, 158, 171); 
      }
    }

    li.slick-active button::before {
      color: white;
    }

    .slick-list{
      overflow: visible;
    }

    button{
      z-index:1;
    }
`

const Wrap = styled.div`
   cursor: pointer;
   img {
     border: 4px solid transparent;
     border-radius: 4px;
     width: 100%;
     height: 100%;
     box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px, 
     rgb( 0 0 0 / 73%) 0px 16px 18px -10px;
     transition-duration: 300ms;

     &:hover{
       border: 4px solid white;
     }
   }
`