import React from 'react'
import RealWeddingBanner from './banner'
import FiltersSection from './filtersection'
import RealWeddingCards from './realweddingcard'

function Rwedding() {
  return (
    <div className='  font-medium'>

      <RealWeddingBanner/>
      <FiltersSection/>
      <RealWeddingCards/>
    </div>
  )
}

export default Rwedding
