import React from 'react'
import Filtar from '../Filtar/Filtar'
import WatchesProdect from './WatchesProdect'
import './watches.scss'

const Watches = ({ cartItem }) => {
  return (
    <>
      <Filtar />
      <WatchesProdect cartItem={cartItem} />
    </>
  )
}

export default Watches