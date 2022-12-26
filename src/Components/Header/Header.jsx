import React from 'react'
import Navbar from './Navbar'
import './header.scss'

const Header = ({ cartItem, decreaseQty, addToCart }) => {

  return (
    <>
      <Navbar cartItem={cartItem} decreaseQty={decreaseQty} addToCart={addToCart} />
    </>
  )
}

export default Header