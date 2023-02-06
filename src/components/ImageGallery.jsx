import './ImageGallery.css'
import { useState, useEffect } from 'react'
import images from './images'
import GalleryCards from './ImageGalleryCard'

function ImageGallery() {
    //BUGS!!: When the page is at the max width the image gallery is improperly spaced, the images are too small and the text isnt centered with each individual image.
    //Possible solution: Use the same window.inner width logic to influence the change in the layout for the gallery

    const [imageSmall, setImageSmall] = useState(false)


        const makeImageSmaller = () => {
            if(window.innerWidth <= 888) {
                setImageSmall(true)
            } else {
                setImageSmall(false)
            }
        } 

        useEffect(() => {
            makeImageSmaller()
        }, [])
        

        window.addEventListener('resize', makeImageSmaller)

 
  return (
    <div className="image-gallery-container">
        {/* {images.map(image => (
            <div className='image-container'>
                 <img src={image.imagePath} alt={image.name} className={imageSmall ? 'image-small' : 'image-large'}/>
                 <p className='image-name'>{image.name}</p>
                 <p className='image-description'>{image.description}</p>
            </div>
        ))} */}
        <GalleryCards />

    </div>
  )
}

export default ImageGallery