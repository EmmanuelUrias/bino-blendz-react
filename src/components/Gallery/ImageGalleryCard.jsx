import React from 'react'
import ImageGalleryCardItem from './ImageGalleryCardItem'
import './ImageGallery.css'

// the id params in the path is causing the error
// I am trying to make some logc that allows that a user can click on the card nd itll render a component that is the one they clicked on
//So far i am thinking that I have to find a way to give these ImageGalleryCardItem a id then pass that to be populated by ID into Cut then from that give those routes in App.js but we still need a functional gallery.


function GalleryCards() {
   
    const cardDetails = ({match}) => {
        const  { id }  = match.params
    }

  return (
    <div className='cards'>
        <div className='cards-container'>
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <ImageGalleryCardItem
                    id={1}
                    className='cards-item-link'
                    src='./images/coolImg.jpg'
                    text='Get fresh'
                    label='High Fade'
                    path= {`/cut/${id}`}
                    />
                     <ImageGalleryCardItem
                    id={2}
                    src='./images/coolImg.jpg'
                    text='Get laid'
                    label='High Fade'
                    path= {`/cut/${id}`}
                    />
                </ul>
                <ul>
                <ImageGalleryCardItem
                    id={3}
                    src='./images/coolImg.jpg'
                    text='Get laid'
                    label='High Fade'
                    path= {`/cut/${id}`}
                    />
                    <ImageGalleryCardItem
                    id={4}
                    src='./images/coolImg.jpg'
                    text='Get bitches'
                    label='High Fade'
                    path= {`/cut/${id}`}
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GalleryCards