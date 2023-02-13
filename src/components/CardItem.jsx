import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
import CardItemPageData from './CardItemPageData'

function CardItem(props) {
    // turn this component into a parent component where it passes down data to Cards and CutPage components so all the haircuts can be displayed properly
    // try making an array of objects and create a structure of data for each one and then make a function where it iterates each object to be displayed as it's own thing

    // cutObj.forEach(() => {
    //     <Link>
    //         <h1>data</h1>
    //     </Link>
    // })

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