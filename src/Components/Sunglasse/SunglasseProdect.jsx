import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import DataSunglasseMen from './../DataSunglasseMen';
import DataSunglasseWomen from './../DataSunglasseWomen';
import './Sunglasse.scss'


const SunglasseProdect = () => {

  const { productDataSunglasseMen } = DataSunglasseMen
  const { productDataSunglasseWomen } = DataSunglasseWomen
  const [More, setMore] = useState(20)
  let params = useParams()

  return (
    <div className='sunglasse_prodect container'>

      {params.sex === 'men' ? productDataSunglasseMen.map((product) => product.display <= More ?
        <div className="sunglasse_box" key={product.id} >
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

      {params.sex === 'women' ? productDataSunglasseWomen.map((product) => product.display <= More ?
        <div className="sunglasse_box" key={product.id} >
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

      <div className="sunglasse_more">
        <button className='btn_sunglasse_more' onClick={() => setMore(More + 12)} >
          More sunglasse
        </button>
      </div>
    </div >
  )
}

export default SunglasseProdect