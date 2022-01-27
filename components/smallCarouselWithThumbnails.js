import React, { useState, useEffect } from 'react';
import {Box} from '@mui/material'
import Slider from "react-slick";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from '../config';



function SmallCarouselWithThumbnail(props) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
  
      setNav1(slider1);
      setNav2(slider2);
  
    });

    
      const settingsThumbs = {
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
      };
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    slidesToScroll: 1, 
     slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
   
      };
    
      return (
        <Box >

<div className="slider-wrapper2">

  <Slider
    {...settings}
    asNavFor={nav2}
    ref={slider => (setSlider1(slider))}
  >

    {props.images.map((slide) =>

      <div className="slick-slide" key={slide.id}>
        <img style={{width: '100%'}} className="slick-slide-image" src={`${API_URL}${slide.url}`} />
      </div>

    )}

  </Slider>
  <div className="thumbnail-slider-wrap">
    <Slider
      {...settingsThumbs}
      asNavFor={nav1}
      ref={slider => (setSlider2(slider))}>

      {props.images.map((slide) =>

        <div className="slick-slide" key={slide.id}>
          <img className="slick-slide-image" src={`${API_URL}${slide.url}`} />
        </div>

      )}

    </Slider>
  </div>
</div>

        </Box>
      );
}

export default SmallCarouselWithThumbnail;