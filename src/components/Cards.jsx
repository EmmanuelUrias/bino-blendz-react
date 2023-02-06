import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
        <h1>Get your haircut with BinoBlendz</h1>
        <div className='cards-container'>
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem
                    src='./images/coolImg.jpg'
                    text='Get fresh'
                    label='High Fade'
                    path='/cut'
                    />
                     <CardItem
                    src='./images/coolImg.jpg'
                    text='Get laid'
                    label='High Fade'
                    path='/cut'
                    />
                </ul>
                <ul>
                <CardItem
                    src='./images/coolImg.jpg'
                    text='Get laid'
                    label='High Fade'
                    path='/cut'
                    />
                    <CardItem
                    src='./images/coolImg.jpg'
                    text='Get bitches'
                    label='High Fade'
                    path='/cut'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards