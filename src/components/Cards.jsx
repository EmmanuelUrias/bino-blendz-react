import React, { useState } from 'react'
import './Cards.css'
import CardItem from './CardItem'
import CardItemPageData from './CardItemPageData'
import CardDataContext from './CutDataContext'
import { useLocation } from "react-router-dom"


function Cards() {
    const location = useLocation()
    let className = 'cards-wrapper'

    if(location.pathname.endsWith('/cuts')) {
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