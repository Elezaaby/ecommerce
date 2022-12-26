import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataSunglasseDetails } from '../DataDetails'
import './productDetails.scss'
import { DataJewelryDetails } from './../DataDetails';

const ProductDetails = ({ productDataDetails, addToCart }) => {


  let params = useParams()
  let param = Number(params.id)
  localStorage.setItem('product', params.product)


  function ChooseImg(e) {
    let imgShow = window.document.getElementById('imgShow')
    imgShow.src = e.target.src
  }


  useEffect(() => {
    function handleScroll() {
      const nav = this.document.querySelector('.nav_price')
      nav.classList.toggle('active', window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])



  const { productSunglasseDataDetails } = DataSunglasseDetails
  const { productJewelryDataDetails } = DataJewelryDetails

  return (
    <div>

      {params.product === 'watches' ? <div>
        {productDataDetails.map((product) => product.id === param && product.sex === params.sex ?
          <div className='details_box' key={product.id}>
            <div className="nav_price">
              <span className='name_nav'>SELECTED: {product.name}</span>
              <button className='addCart_btn' onClick={() => addToCart(product)}>
                <span>Add to cart</span>
                <span>£{product.price}.00</span>
              </button>


            </div>
            <div className="show_img container">
              <div className="details_img">
                <div className="details_img_nav">
                  <div><img src={product.img_1} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_2} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_3} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_4} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_5} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_6} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_7} alt="" onClick={ChooseImg} /></div>
                </div>
                <div className="details_img_show">
                  <img src={product.img_1} alt="" id='imgShow' />
                </div>
              </div>
              <div className="details_desc">
                <div className="head">
                  <h3>{product.name}<span></span></h3>
                  <i>£{product.price}.00</i>
                </div>
                <span>{product.desc}</span>
                <h6>Case Size: {product.size}</h6>

                <button className='addCart_btn' onClick={() => addToCart(product)}>
                  <span>Add to cart</span>
                  <span>£{product.price}.00</span>
                </button>

              </div>
            </div>
            <div className="show_video">
              <div className="details_video container">
                <div className="video_1">
                  <div className="titel">
                    <h4>BE THE MAN OF THE HOUR.</h4>
                    <span>Your ultimate office to night out watch. The Legacy Slim is our take on the classic dress watch, inspired by our entrepreneurial roots. Its ultra slim case is made to slip easily under pressed shirts and jacket sleeves, and its sharp dial with domed glass nods to its 1960’s golden age watch lineage.</span>
                  </div>
                  <div className="video">
                    {product.img_8 ? <img src={product.img_8} alt="" /> : <video src={product.video_1} loop autoPlay muted></video>}
                  </div>
                </div>
                <div className="video_2">
                  <div className="video">
                    {product.img_9 ? <img src={product.img_9} alt="" /> : <video src={product.video_2} loop autoPlay muted></video>}
                  </div>
                  <div className="titel">
                    <h4>INTERCHANGEABLE STRAPS</h4>
                    <span>Reinvent your favorite watch with our interchangeable strap functionality. Take turns between materials for different occasions and colors for different expressions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : ''
        )}
      </div> : ''}

      {params.product === 'sunglasse' ? <div>
        {productSunglasseDataDetails.map((product) => product.id === param && product.sex === params.sex ?
          <div className='details_box' key={product.id}>
            <div className="nav_price">
              <span className='name_nav'>SELECTED: {product.name}</span>
              <button className='addCart_btn' onClick={() => addToCart(product)}>
                <span>Add to cart</span>
                <span>£{product.price}.00</span>
              </button>


            </div>
            <div className="show_img container">
              <div className="details_img">
                <div className="details_img_nav">
                  <div><img src={product.img_1} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_2} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_3} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_4} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_5} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_6} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_7} alt="" onClick={ChooseImg} /></div>
                </div>
                <div className="details_img_show">
                  <img src={product.img_1} alt="" id='imgShow' />
                </div>
              </div>
              <div className="details_desc">
                <div className="head">
                  <h3>{product.name}<span></span></h3>
                  <i>£{product.price}.00</i>
                </div>
                <span>{product.desc}</span>
                <h6>Case Size: {product.size}</h6>

                <button className='addCart_btn' onClick={() => addToCart(product)}>
                  <span>Add to cart</span>
                  <span>£{product.price}.00</span>
                </button>

              </div>
            </div>
          </div>
          : ''
        )}
      </div> : ''}

      {params.product === 'jewelry' ? <div>
        {productJewelryDataDetails.map((product) => product.id === param && product.sex === params.sex ?
          <div className='details_box' key={product.id}>
            <div className="nav_price">
              <span className='name_nav'>SELECTED: {product.name}</span>
              <button className='addCart_btn' onClick={() => addToCart(product)}>
                <span>Add to cart</span>
                <span>£{product.price}.00</span>
              </button>


            </div>
            <div className="show_img container">
              <div className="details_img">
                <div className="details_img_nav">
                  <div><img src={product.img_1} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_2} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_3} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_4} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_5} alt="" onClick={ChooseImg} /></div>
                  <div><img src={product.img_6} alt="" onClick={ChooseImg} /></div>
                </div>
                <div className="details_img_show">
                  <img src={product.img_1} alt="" id='imgShow' />
                </div>
              </div>
              <div className="details_desc">
                <div className="head">
                  <h3>{product.name}<span></span></h3>
                  <i>£{product.price}.00</i>
                </div>
                <span>{product.desc}</span>
                <h6>Case Size: {product.size}</h6>

                <button className='addCart_btn' onClick={() => addToCart(product)}>
                  <span>Add to cart</span>
                  <span>£{product.price}.00</span>
                </button>
              </div>
            </div>
          </div>
          : ''
        )}
      </div> : ''}
    </div >
  )
}
export default ProductDetails