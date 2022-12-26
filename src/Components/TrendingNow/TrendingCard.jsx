import Slider from 'react-slick'
import React from 'react'
import { Link } from 'react-router-dom'



const TrendingCard = ({ productTrendingData }) => {
  // console.log(productData)

  const settings = {
    // dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  }


  return (
    <>
      <Slider {...settings}>
        {productTrendingData.map((productData) => productData.trending === true ?
          <Link to={`watches/${productData.product}/${productData.sex}/${productData.id}`} className="trending_box" key={productData.id} >
            <div className="img">
              <img src={productData.cover} alt="" />
            </div>
            <div className="name_product">
              <h5>{productData.name}</h5>
              <span>{productData.desc}</span>
            </div>
            <div className="price">
              <li>{productData.price}.00</li>
            </div>
          </Link>
          : ''
        )}
      </Slider>
    </>
  )
}

export default TrendingCard