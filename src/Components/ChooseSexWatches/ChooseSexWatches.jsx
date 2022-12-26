import React from 'react'
import { Link } from 'react-router-dom';
import './ChooseSexWatches.scss'
import MensWatches from '../images/choosesexwatches/MensWatches.jpg'
import WomensWatches from '../images/choosesexwatches/WomensWatches.jpg'

const ChooseSexWatches = () => {
  return (
    <>
      <div className="container">
        <div className="d_flex choose_sex_watches ">
          <div className="men" style={{ backgroundImage: `url(${MensWatches})` }}>
            <Link to='men'>
              <div>
                <span>MENS WATCHES</span><br />
                <button>shop now</button>
              </div>
            </Link>
          </div>
          <div className="women" style={{ backgroundImage: `url(${WomensWatches})` }}>
            <Link to='women'>
              <div>
                <span>Women WATCHES</span><br />
                <button>shop now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseSexWatches