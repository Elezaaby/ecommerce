import React from 'react'
import Home from '../Components/Home/Home';
import ShopCategory from '../Components/ShopCategory/ShopCategory';
// import TrendingDeals from '../Components/TrendingCard/TrendingDeals';
import TrendingDeals from './../Components/TrendingNow/TrendingDeals';

const Pages = () => {

  return (
    <>
      <Home />
      <TrendingDeals />
      <ShopCategory />
    </>
  )
}

export default Pages