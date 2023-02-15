import React from 'react'
import CardItem from '../CardItem'
import CardItemPageData from '../CardItemPageData'
import Cut from '../Cut'

function CutPage(props) {
  return (
    <div>
      <h1>Cut Page</h1>
        <Cut cardData={props.cardData}/>
    </div>
  )
}

export default CutPage