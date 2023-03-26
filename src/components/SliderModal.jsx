import React from 'react'
import './SliderModal.css'

function SliderModal({currentIndex, handleClose}) {
  return (
    <div className='modal-page' onClick={() => handleClose()}>
        <div className='modal-container'>
            <img src={`.${currentIndex}`} alt={currentIndex}></img>
        </div>
    </div>
  )
}

export default SliderModal