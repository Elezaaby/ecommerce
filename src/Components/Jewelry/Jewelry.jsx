import React from 'react'
import JewelryProdect from './JewelryProdect'
import './jewelry.scss'
import Filtar from '../Filtar/Filtar'

const Jewelry = () => {
  return (
    <>
      <Filtar />
      <JewelryProdect />
    </>
  )
}

export default Jewelry