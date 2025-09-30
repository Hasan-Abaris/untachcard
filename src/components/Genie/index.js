import React from 'react'
import Home from './Home'
import Packages from './packages'
import Customersreview from './customersreview'
import Faq from './faq'

function  Genie() {
  return (
    <div className='mt-32'>
      <Home/>
      <Packages/>
      <Customersreview/>
      <Faq/>
    </div>
  )
}

export default Genie
