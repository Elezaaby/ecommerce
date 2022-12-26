import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DataWatchesWomen from './../DataWatchesWomen';
import DataWatchesMen from './../DataWatchesMen';

const WatchesProdect = ({ cartItem }) => {
  const [watcheMore, setWatcheMore] = useState(20)
  const { productDataWatchesWomen } = DataWatchesWomen;
  const { productDataWatchesMen } = DataWatchesMen;

  let params = useParams()


  return (
    <div className='watches_prodect container'>

      {params.sex === 'men' ? productDataWatchesMen.map((product) => product.display <= watcheMore ?
        <div className="watches_box" key={product.id} >
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

      {params.sex === 'women' ? productDataWatchesWomen.map((product) => product.display <= watcheMore ?
        <div className="watches_box" key={product.id} >
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

      <div className="watche_more">
        <button className='btn_watche_more' onClick={() => setWatcheMore(watcheMore + 12)} >
          More Watches
        </button>
      </div>
    </div >
  )
}

export default WatchesProdect