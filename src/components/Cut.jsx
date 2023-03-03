import React from 'react'
import { useParams } from 'react-router-dom'
import CutDataContext from './CutDataContext';
import { useContext } from 'react';
import './CutPage.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Cut(props) {
    const { cutData } = useContext(CutDataContext) 

    const { id } = useParams();

    // Find the object with the specified ID
    const cutObject = cutData.find(obj => obj.id === parseInt(id));
  
    // If the object with the specified ID was not found, show an error message
    if (!cutObject) {
      return <div>Page Not Found</div>;
    }
  
    // Show the content of the object with the specified ID
    return (
    <div>
      <div className='cutPage'>
            <div className='gallery-container'>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[1].img2}`}
                alt="haircut"
              ></img>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[0].img1}`}
                alt="haircut"
              ></img>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[1].img2}`}
                alt="haircut"
              ></img>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[1].img2}`}
                alt="haircut"
              ></img>
            </div>
           <div className="cutPage-text-container">
               <h1 className="cutPage-title">{cutObject.title}</h1>
               <h2 className="cutPage-text">{cutObject.text}</h2>
               <h3 className="cutPage-description">{cutObject.description}</h3>
               <h4 className="cutPage-price">{cutObject.price}</h4>
               <div className='btn-container'>
              <Link to='/booknow'>
               <button className="cutPage-btn">Book Now</button>
              </Link>
               </div>
           </div>
      </div>
      <Footer />
    </div>

    );
  }

export default Cut