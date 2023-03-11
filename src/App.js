import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Cuts from './components/pages/Cuts';
import AboutUs from './components/pages/AboutUs';
import BookNow from './components/pages/BookNow';
import CutDataContext from './components/CutDataContext';
import { useState } from 'react';
import Cut from './components/Cut';
import AutoScrollToTop from './components/AutoScrollToTop';

function App() {
  const [cutData, setCutData] = useState([
    {
      id: 'fades',
      key: 1,
      thumbnail: './images/coolImg.jpg',
      galleryImgs: [
        {
        img1: './images/coolImg.jpg'
        },
        {
          img2: './images/coolImg.jpg'
        },
        {
          img3: './images/coolImg.jpg'
        },
        {
          img4: './images/coolImg.jpg'
        }
      ],
      title: 'Fades',
      text: 'Pick from a wide selection of Fades',
      label: 'Fades',
      description: 'Choose between a high, mid, or low fade. Fades are the best way to get clean sharp look while being tailored to your unique head shape.',
      price: '$35',
      path: '/haircut/fades'
  }, {
      id: 'tapers',
      key: 2,
      thumbnail: './images/coolImg.jpg',
      galleryImgs: [
        {
        img1: './images/coolImg.jpg'
        },
        {
          img2: './images/coolImg.jpg'
        },
        {
          img3: './images/coolImg.jpg'
        },
        {
          img4: './images/coolImg.jpg'
        }
      ],      
      title: 'Tapers',
      text:'You can never go wrong with a Taper',
      label: 'Tapers',
      description: 'Keep the bulk of your hair while still maintaining a clean sharp look. Consult Bino for the taper that fits you best',
      price: '$35',
      path: '/haircut/tapers'
  }, {
      id: 'designs',
      key: 3,
      thumbnail: './images/coolImg.jpg',
      galleryImgs: [
        {
        img1: './images/coolImg.jpg'
        },
        {
          img2: './images/coolImg.jpg'
        },
        {
          img3: './images/coolImg.jpg'
        },
        {
          img4: './images/coolImg.jpg'
        }
      ],
      title: 'Designs',      
      text: 'Make your haircut pop a little bit more',
      label: 'Designs',
      description: 'Choose from the gallery or bring in a picture of a design you like. If you can\'t decide, don\'t worry, just ask for a freestyle for a guaranteed fresh design',
      price: 'Free',
      path: '/haircut/designs'
  }
  ])

  const updateCutData = (id, newData) => {
    setCutData(cutData.map(obj => obj.id === id ? newData : obj))
  }

  return (
    <CutDataContext.Provider value={{cutData, updateCutData}}>
      <div className="App">
        <Navbar />
        <AutoScrollToTop />
        {/* <AutoScrollToTop /> */}
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/haircuts' exact element={<Cuts />}/>
          <Route path='/haircut/:id' element={<Cut cutData={cutData} />} />
          <Route path='/aboutus' exact element={<AboutUs />}/>
          <Route path='/booknow' exact element={<BookNow />}/>
        </Routes>
      </div>
    </CutDataContext.Provider>
  );
}

export default App;
