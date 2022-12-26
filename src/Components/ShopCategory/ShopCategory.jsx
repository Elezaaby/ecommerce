import React from 'react'
import Slider from 'react-slick'
import './ShopCategory.scss'
import { Link } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import menEverscrolls from '../images/ShopCategory/men_everscrolls.jpg'
import menJewelry from '../images/ShopCategory/men_jewelry.jpg'
import menSunglasses from '../images/ShopCategory/men_sunglasses.jpg'
import menWatches from '../images/ShopCategory/men_watches.jpg'
import womenEverscrolls from '../images/ShopCategory/women_everscrolls.jpg'
import womenJewelry from '../images/ShopCategory/women_jewelry.jpg'
import womenSunglasses from '../images/ShopCategory/women_sunglasses.jpg'
import womenWatches from '../images/ShopCategory/women_watches.jpg'

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control_btn" onClick={onClick}>
      <button className='next'>
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  )
}
const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control_btn" onClick={onClick}>
      <button className='prev'>
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  )
}

const ShopCategory = () => {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <>
      <div className='shop_category'>
        <span className='titel' >Shop By Category</span>
        <Slider {...settings}>
          <Link to='/eyewear/men' className='shop_category_item'>
            <img className='width' src={menEverscrolls} alt="" />
            <span>men Everscrolls</span>
          </Link>
          <Link to='/jewelry/men' className='shop_category_item'>
            <img className='width' src={menJewelry} alt="" />
            <span>men Jewelry</span>
          </Link>
          <Link to='/eyewear/men' className='shop_category_item'>
            <img className='width' src={menSunglasses} alt="" />
            <span>men Sunglasses</span>
          </Link>
          <Link to='/watches/men' className='shop_category_item'>
            <img className='width' src={menWatches} alt="" />
            <span>men Watches</span>
          </Link>
          <Link to='/eyewear/women' className='shop_category_item'>
            <img className='width' src={womenEverscrolls} alt="" />
            <span>women Everscrolls</span>
          </Link>
          <Link to='/jewelry/women' className='shop_category_item'>
            <img className='width' src={womenJewelry} alt="" />
            <span>women Jewelry</span>
          </Link>
          <Link to='/eyewear/women' className='shop_category_item'>
            <img className='width' src={womenSunglasses} alt="" />
            <span>women Sunglasses</span>
          </Link>
          <Link to='/watches/women' className='shop_category_item'>
            <img className='width' src={womenWatches} alt="" />
            <span>women Watches</span>
          </Link>
        </Slider>
      </div>
    </>
  )
}

export default ShopCategory