import './ImageGallery.css'
import { useState, useEffect } from 'react'

function ImageGallery() {
    //BUGS!!: When the page is at the max width the image gallery is improperly spaced, the images are too small and the text isnt centered with each individual image.
    //Possible solution: Use the same window.inner width logic to influence the change in the layout for the gallery

    const [imageSmall, setImageSmall] = useState(false)

    const images = [
        {
            name: 'foo',
            imagePath: './images/coolImg.jpg',
            description: 'I love to blah blah blah'
        },
        {
            name: 'bar',
            imagePath: './images/coolImg.jpg',
            description: 'I love to blah blah blah'
        },
        {
            name: 'foo',
            imagePath: './images/coolImg.jpg',
            description: 'I love to blah blah blah'
        },
        {
            name: 'bar',
            imagePath: './images/coolImg.jpg',
            description: 'I love to blah blah blah'
        }]

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
        {images.map(image => (
            <div>
                 <img src={image.imagePath} alt={image.name} className={imageSmall ? 'image-small' : 'image-large'}/>
                 <p className='image-name'>{image.name}</p>
                 <p className='image-description'>{image.description}</p>
            </div>
        ))}

    </div>
  )
}

export default ImageGallery