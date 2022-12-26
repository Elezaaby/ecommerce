import React from 'react';
import { Link } from 'react-router-dom'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../Cart/Cart'

import mobileNavWatches from '../images/mobileNav/Watches.jpg'
import mobileNavEyewear from '../images/mobileNav/Eyewear.jpg'
import mobileNavJewelry from '../images/mobileNav/Jewelry.jpg'
import mobileNavSale from '../images/mobileNav/last_chance.jpg'
import mobileNavGift from '../images/mobileNav/Gift.jpg'
import mobileNavbrand from '../images/mobileNav/brand.jpg'
import Search from './Search';

const Navbar = ({ cartItem, decreaseQty, addToCart }) => {

  const [toggleCart, setToggleCart] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    setToggleCart({ ...toggleCart, [anchor]: open });
  };

  window.addEventListener('scroll', function () {
    const nav = this.document.querySelector('.nav')
    nav.classList.toggle('active', window.scrollY > 100)
  })

  return (
    <section className='nav'>
      <div className="container">
        <div className="d_flex">
          <div className="logo">
            <MenuIcon onClick={toggleDrawer('left', true)} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
            <Drawer anchor="left" open={toggleCart['left']} onClose={toggleDrawer('left', false)}>
              <div className="nav_links_mobile">
                <h4><Link to='/'>Ecommerce</Link></h4>
                <ul>
                  <li style={{ backgroundImage: `url(${mobileNavWatches})` }}>
                    <Link to='/watches'>
                      <span>watches</span>
                    </Link>
                  </li>
                  <li style={{ backgroundImage: `url(${mobileNavEyewear})` }}>
                    <Link to='/eyewear'>
                      <span>eyewear</span>
                    </Link>
                  </li>
                  <li style={{ backgroundImage: `url(${mobileNavJewelry})` }}>
                    <Link to='/jewelry'>
                      <span>jewelry</span>
                    </Link>
                  </li>
                  <li style={{ backgroundImage: `url(${mobileNavGift})` }}>
                    <Link to='/gifing'>
                      <span>gifing</span>
                    </Link>
                  </li>
                  <li style={{ backgroundImage: `url(${mobileNavSale})` }}>
                    <Link to='/sale'>
                      <span>sale</span>
                    </Link>
                  </li>
                  <li style={{ backgroundImage: `url(${mobileNavbrand})` }}>
                    <Link to='/brand'>
                      <span>brand</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Drawer>
            <h4><Link to='/'>Ecommerce</Link></h4>
          </div>
          <div className="nav_links">
            <ul>
              <li>
                <Link to='/watches'>
                  watches
                </Link>
              </li>
              <li>
                <Link to='/eyewear'>
                  eyewear
                </Link>
              </li>
              <li>
                <Link to='/jewelry'>
                  jewelry
                </Link>
              </li>
              <li>
                <Link to='/gifing'>
                  gifing
                </Link>
              </li>
              <li>
                <Link to='/sale'>
                  sale
                </Link>
              </li>
              <li>
                <Link to='/brand'>
                  brand
                </Link>
              </li>
            </ul>
          </div>
          <Search />
          <div className="nav_icon d_flex ">
            <i className='fa fa-user nav_icon_user '></i>
            <div className="nav_icon_cart">
              <i onClick={toggleDrawer('right', true)} className='fa fa-shopping-bag'></i>
              <Drawer anchor="right" open={toggleCart['right']} onClose={toggleDrawer('right', false)}>
                <>
                  <Cart cartItem={cartItem} decreaseQty={decreaseQty} addToCart={addToCart} />
                </>
              </Drawer>
              <span>{cartItem.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Navbar