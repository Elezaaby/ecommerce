import React, { useEffect } from 'react'
import navImg from '../images/watches/watches_nav.jpg'
import './Filtar.scss'

const Filtar = () => {


  useEffect(() => {
    function handleScroll() {
      const nav = this.document.querySelector('.nav_desc')
      nav.classList.toggle('active', window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])



  return (
    <section className='filtar'>

      <div className="nav_img" style={{ backgroundImage: `url(${navImg})` }}>
        <div className="container_img_desc">
          <h5>ALL Product</h5>
          <span>Classic style meets modern design.</span>
        </div>
      </div>

      <div className=" nav_desc">
        <div className="d_flex ">
          <div className="right">
            <button>
              <span>Color</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              <span>Size</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              <span>Collection</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              <span>Strap Tone</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              <span>Strap Material</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <div className="left">
            <button>
              <span>Our Favoritrs</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filtar