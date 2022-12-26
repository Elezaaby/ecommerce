import React from 'react'
import './trending.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TrendingCard from './TrendingCard.jsx'
import DataTrending from './../trendingData';

const TrendingDeals = () => {
  const { productTrendingData } = DataTrending

  // console.log(productTrendingData);

  return (
    <section className='trending'>
      <div className='container'>
        <div className="trending_title j_flex">
          <span>Trending Now</span>
        </div>
        <div>
          <TrendingCard productTrendingData={productTrendingData} />
        </div>
      </div>
    </section>
  )
}

export default TrendingDeals