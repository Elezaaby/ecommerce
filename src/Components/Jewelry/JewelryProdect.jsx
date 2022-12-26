import React, { useState } from 'react'
import DataJewelryMen from './../DataJewelryMen';
import { useParams, Link } from 'react-router-dom';
import './jewelry.scss'
import DataJewelryWomen from './../DataJewelryWomen';

const JewelryProdect = () => {

  const { productDataJewelryMen } = DataJewelryMen
  const { productDataJewelryWomen } = DataJewelryWomen
  const [More, setMore] = useState(20)
  let params = useParams()




  return (
    <div className='jewelry_prodect container'>

      {params.sex === 'men' ? productDataJewelryMen.map((product) => product.display <= More ?
        <div className="jewelry_box" key={product.id} >
          <Link to={`${product.product}/${params.sex}/${product.id}`}>
            <div>
              <div className="hed_box">
                <div className="img">
                  <img className='width' src={product.cover} alt="" />
                </div>
                <div className="name_product">
                  <h5>{product.name}</h5>
                  <span>{product.desc}</span>
                </div>
                <div className="price">
                  <li>£{product.price}.00</li>
                </div>
              </div>
              <Link className="add_cart" to={`${params.sex}/${product.id}`}>
                <button>
                  Add to cart
                </button>
              </Link>
            </div>
          </Link>
        </div>
        : '') : ''}

      {params.sex === 'women' ? productDataJewelryWomen.map((product) => product.display <= More ?
        <div className="jewelry_box" key={product.id} >
          <Link to={`${product.product}/${params.sex}/${product.id}`}>
            <div>
              <div className="hed_box">
                <div className="img">
                  <img className='width' src={product.cover} alt="" />
                </div>
                <div className="name_product">
                  <h5>{product.name}</h5>
                  <span>{product.desc}</span>
                </div>
                <div className="price">
                  <li>£{product.price}.00</li>
                </div>
              </div>
              <Link className="add_cart" to={`${params.sex}/${product.id}`}>
                <button>
                  Add to cart
                </button>
              </Link>
            </div>
          </Link>
        </div>
        : '') : ''}

      <div className="jewelry_more">
        <button className='btn_jewelry_more' onClick={() => setMore(More + 12)} >
          More jewelry
        </button>
      </div>
    </div >
  )
}

export default JewelryProdect