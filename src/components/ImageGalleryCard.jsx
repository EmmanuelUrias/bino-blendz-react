import React from 'react'
import CardItem from './CardItem'
import './ImageGallery.css'

function GalleryCards() {
  return (
    <div className='cards'>
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

export default GalleryCards