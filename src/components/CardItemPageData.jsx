import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import  CutDataContext  from './CutDataContext'
import { useContext } from 'react'


function CardItemPageData(props) {
    const { cutData, updateCutData } = useContext(CutDataContext)

    return (
        <div>
            {cutData.map(data => (
                <Link to={data.path} key={data.id}>
                    <CardItem 
                     key={data.id}
                     id={data.id}
                     src={data.src}
                     text={data.text}
                     label={data.label}
                     path={data.path}
                     />
                </Link>
            ))}
        </div>
   )
}

export default CardItemPageData