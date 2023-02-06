import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <div>
        <ul className='cards-item'>
            <Link to={props.path} className="cards-item-link">
                <figure className="cards-item-pic-wrap" data-category={props.label}>
                    <img className='cards-item-img' src={props.src} alt='Image'></img>
                </figure>
                <div className="cards-item-info">
                    <h5 className="cards-item-text">{props.text}</h5>
                </div>
            </Link>
        </ul>
    </div>
  )
}

export default CardItem