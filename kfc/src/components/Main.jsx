import React from 'react'
import ExploreMenu from './ExploreMenu'
import TopDeal from './TopDeal'
import Ad from './Ad'


function Main({items, cards}) {
  return (
    <>
    <ExploreMenu items= {items} />
    <TopDeal cards={cards} />
    <Ad />
    </>
  )
}

export default Main