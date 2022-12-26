import React from 'react'
import { Link } from 'react-router-dom';
import './ChooseSexJewelry.scss'

import MensJewelry from '../images/choosesexjewelry/MensJewelry.jpg'
import WomensJewelry from '../images/choosesexjewelry/WomensJewelry.jpg'

const ChooseSexJewelry = () => {


  return (
    <>
      <div className="container">
        <div className="d_flex choose_sex_jewelry ">
          <div className="men" style={{ backgroundImage: `url(${MensJewelry})` }}>
            <Link to='men'>
              <div>
                <span>MENS jewelry</span><br />
                <button>shop now</button>
              </div>
            </Link>
          </div>
          <div className="women" style={{ backgroundImage: `url(${WomensJewelry})` }}>
            <Link to='women'>
              <div>
                <span>Women jewelry</span><br />
                <button>shop now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseSexJewelry