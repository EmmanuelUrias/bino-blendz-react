import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import  CutDataContext  from './CutDataContext'
import { useContext } from 'react'


function CardItemPageData(props) {
    const { cutData } = useContext(CutDataContext)

    return (
        <div>
            {cutData.map(data => (
                <Link to={data.path} key={data.key}>
                    <CardItem 
                     key={data.key}
                     id={data.id}
                     thumbnail={data.thumbnail}
                     text={data.text}
                     label={data.label}
                     price={data.price}
                     path={data.path}
                     />
                </Link>
            ))}
        </div>
   )
}

export default CardItemPageData