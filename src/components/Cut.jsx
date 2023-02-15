import React from 'react'
import { useParams } from 'react-router-dom'
import CutDataContext from './CutDataContext';
import { useContext } from 'react';

function Cut(props) {
    const { cutData, updateCutData } = useContext(CutDataContext) 

    const { id } = useParams();

    // Find the object with the specified ID
    const cutObject = cutData.find(obj => obj.id === parseInt(id));
  
    // If the object with the specified ID was not found, show an error message
    if (!cutObject) {
      return <div>Object not found</div>;
    }
  
    // Show the content of the object with the specified ID
    return (
      <div>
        <img src={`.${cutObject.src}`} alt={cutObject.label} />
        <h2>{cutObject.label}</h2>
        <p>{cutObject.text}</p>
      </div>
    );
  }

export default Cut