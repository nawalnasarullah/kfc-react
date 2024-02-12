import React from 'react'
import Item from './Item'

function ExploreMenu({items}) {
  return (
    <>
  <div className="explore-menu-wrapper mt-5">
    <div className="container">
      <h2 className="item-title">
        <span>Explore Menu</span>
      </h2>
      <div className="owl-carousel owl-theme">
        {
            items.map(item=><Item item={item}/>)
        }
      </div>
    </div>
    {/* /.container */}
  </div>
  {/* /.explore-menu-wrapper */}
</>

  )
}

export default ExploreMenu