import React from 'react'
import Card from './Card'

function TopDeal({cards}) {
  return (
<>
  <div className="top-deals-wrapper mt-5">
    <div className="container">
      <h2 className="item-title">
        <span>Top Deals</span>
      </h2>
      <div className="row">
        {
            cards.map(card=><Card card={card}/>)
        }
      </div>
    </div>
    {/* /.container */}
  </div>
  {/* /.top-deals-wrapper */}
</>

  )
}

export default TopDeal