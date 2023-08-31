import React from 'react'

import SwissInfrastructure from '../molecules/swissinfrastructure'
import InfrastructureBlock from '../molecules/infrastructure-block'

import PrivacyImage from "../../assets/infrastructureMap.svg"

function Infrastructure() {
  return (
    <div className='infrastructure'> 
        <h2 className='infrastructure__title'>Swiss Infrastructure</h2>
        <h4 className="infrastructure__subtitle">
          Our server is proudly hosted in Basel, Switzerland, leveraging the
          robust Swiss infrastructure.
        </h4>
        <p> This location offers:</p>
      <InfrastructureBlock title={"Stability"} text="sdsdsadasdsdasdasdsadsadsaddasdsa" image={PrivacyImage}/>
        <div className='infrastructure__blocks-in-row'>
      <InfrastructureBlock title={"Privacy"} text="sdsdsadasdasdsa" image={PrivacyImage}/>
      <InfrastructureBlock title={"Quality"} text="sdsdsadasdasdsadsadsadasdsa" image={PrivacyImage}/>
      </div>
    </div>
  )
}

export default Infrastructure