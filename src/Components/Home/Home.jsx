import React from 'react'
import sale from '../images//home/sale.jpeg'
import './home.scss'
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container">
          <div className="box_sale">
            <div className="d_flex">
              <div className="img">
                <img src={sale} alt="" />
              </div>
              <div className="desc_sale">
                <div className="head_sale">
                  <h2>Ecommerce Holiday Sale <span></span></h2>
                  <i>20% Off Sitewide</i><br />
                  <span>USE Code: holid101</span><br />
                  <div className='d_flex'>
                    <button>Shop Mens Sale</button>
                    <button>Shop Womens Sale</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home