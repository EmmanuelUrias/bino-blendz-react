import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'

function CardItemPageData(props) {
    const cardData = [
        {
            id: 1,
            src: './images/coolImg.jpg',
            text: 'Get fresh',
            label: 'High Fade',
            path: '/cut'
        }, {
            id: 2,
            src: './images/coolImg.jpg',
            text:'Get cut',
            label: 'High Fade',
            path: '/cut'
        }, {
            id: 3,
            src: './images/coolImg.jpg',
            text: 'Get laid',
            label: 'High Fade',
            path: '/cut'
        }
    ]

    return (
        <div>
            {cardData.map(data => (
                <CardItem 
                    key={data.id}
                    id={data.id}
                    src={data.src}
                    text={data.text}
                    label={data.label}
                    path={data.path}
                />
            ))}
        </div>
   )
}

export default CardItemPageData