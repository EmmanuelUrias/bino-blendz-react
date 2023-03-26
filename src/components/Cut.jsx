import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import CutDataContext from './CutDataContext';
import { useContext } from 'react';
import './CutPage.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SliderModal from './SliderModal';

function Cut(props) {
    const { cutData } = useContext(CutDataContext) 

    const [showModal, setShowModal] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null)
    //const [imgToShow, setImgToShow] = useState(null)

    const { id } = useParams();

    // Find the object with the specified ID
    const cutObject = cutData.find(obj => obj.id === id);
  
    // If the object with the specified ID was not found, show an error message
    if (!cutObject) {
      return <div>Page Not Found</div>;
    }

    const handleClick = (index) => {
      setCurrentIndex(index)
      setShowModal(true)
    }
  
    const handleClose = () => {
      setShowModal(false)
    }

    // Show the content of the object with the specified ID
    return (
    <div>
      <div className='cutPage'>
            <div className='gallery-container'>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[2].img3}`}
                alt="haircut"
                onClick={() => handleClick(cutObject.galleryImgs[2].img3)}
              ></img>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[0].img1}`}
                alt="haircut"
                onClick={() => handleClick(cutObject.galleryImgs[0].img1)}
              ></img>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[1].img2}`}
                alt="haircut"
                onClick={() => handleClick(cutObject.galleryImgs[1].img2)}
              ></img>
              <img
                className="gallery-images"
                src={`.${cutObject.galleryImgs[3].img4}`}
                alt="haircut"
                onClick={() => handleClick(cutObject.galleryImgs[3].img4)}
              ></img>
            </div>
           <div className="cutPage-text-container">
               <h1 className="cutPage-title">{cutObject.title}<br/><br/></h1>
               <h2 className="cutPage-text">{cutObject.text}<br/><br/></h2>
               <h3 className="cutPage-description">{cutObject.description}</h3>
               <h4 className="cutPage-price">{cutObject.price}</h4>
               <div className='btn-container'>
              <Link to='/booknow'>
               <button className="cutPage-btn">Book Now</button>
              </Link>
               </div>
               {showModal ? <SliderModal currentIndex={currentIndex} handleClose={handleClose}/> : ''}
           </div>
      </div>
      <Footer />
    </div>

    );
  }

export default Cut