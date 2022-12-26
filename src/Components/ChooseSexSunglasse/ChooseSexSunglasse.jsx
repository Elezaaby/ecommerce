import React from 'react'
import { Link } from 'react-router-dom';
import './ChooseSexSunglasse.scss'

import MensSunglasses from '../images/choosesexsunglasse/MensSunglasse.jpg'
import WomensSunglasse from '../images/choosesexsunglasse/WomensSunglasse.jpg'

const ChooseSexSunglasse = () => {
  return (
    <>
      <div className="container">
        <div className="d_flex choose_sex_watches ">
          <div className="men" style={{ backgroundImage: `url(${MensSunglasses})` }}>
            <Link to='men'>
              <div>
                <span>MENS Sunglasse</span><br />
                <button>shop now</button>
              </div>
            </Link>
          </div>
          <div className="women" style={{ backgroundImage: `url(${WomensSunglasse})` }}>
            <Link to='women'>
              <div>
                <span>Women Sunglasse</span><br />
                <button>shop now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseSexSunglasse