import React from 'react'
import './Cards.css'
import CardItemPageData from './CardItemPageData'
import { useLocation } from "react-router-dom"


function Cards() {
    const location = useLocation()
    let className = 'cards-wrapper'

    if(location.pathname.endsWith('/haircuts')) {
        className += '-cuts'
    }

     return (
        <div className='cards'>
            <h1>Get your haircut with BinoBlendz</h1>
            <div className='cards-container'>
                <div className={className}>
                    <ul className="cards-items">
                        <CardItemPageData />
                    </ul>
                </div>
            </div>
        </div>
      )
}

export default Cards