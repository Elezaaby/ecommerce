import React from 'react'
import './footer.scss'
import footerImg from '../images/footer/footerImg.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="join_footer" style={{ backgroundImage: `url(${footerImg})` }}>
        <div className="join_footer_desc">
          <span>Join  The Ecommerce, get 10% off</span>
          <input placeholder='Enter Email Address' type="email" />
          <button>Subscribr</button>
        </div>
      </div>
      <div className="ul_footer">
        <div className="item_footer">
          <h3>Ecommerce</h3>
          <Link>
            <span>
              mahmodalezaby@gmail.com
            </span>
          </Link><br />
          <Link>
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </div>
        <div className="item_footer">
          <ul>
            <li>
              Shop Ecommerce
            </li>
            <li>
              <Link to='/watches'>
                Shop Watches
              </Link>
            </li>
            <li>
              <Link to='/eyewear'>
                Shop Eyewear
              </Link>
            </li>
            <li>
              <Link to='/jewelry'>
                Shop Jewelry
              </Link>
            </li>
            <li>
              <Link to=''>
                Shop insta
              </Link>
            </li>
          </ul>
        </div>
        <div className="item_footer">
          <ul>
            <li>
              customer service
            </li>
            <li>
              <Link to='/'>
                accessibility statement
              </Link>
            </li>
            <li>
              <Link to='/'>
                my account
              </Link>
            </li>
            <li>
              <Link to='/'>
                contactus
              </Link>
            </li>
            <li>
              <Link to='/'>
                shipping & returns
              </Link>
            </li>
            <li>
              <Link to='/'>
                faq
              </Link>
            </li>
            <li>
              <Link to='/'>
                store locator
              </Link>
            </li>
            <li>
              <Link to='/'>
                site map
              </Link>
            </li>
          </ul>
        </div>
        <div className="item_footer">
          <ul>
            <li>
              #jointheEcommerce
            </li>
            <li>
              <Link to='/'>
                our story
              </Link>
            </li>
            <li>
              <Link to='/'>
                our blog
              </Link>
            </li>
            <li>
              <Link to='/'>
                ambassadors & affiliates
              </Link>
            </li>
            <li>
              <Link to='/'>
                california privacy
              </Link>
            </li>
            <li>
              <Link to='/'>
                cookies settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="item_footer item_footer_last ">
          <ul>
            <li>
              Sign up for newsletter
            </li>
            <li className='enter_email'>
              <input type="text" placeholder='Enter your email address' />
              <i className="fa-solid fa-envelope"></i>
            </li>
            <li>
              <Link to='/'>
                our blog
              </Link>
            </li>
            <li>
              <Link to='/'>
                ambassadors & affiliates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer