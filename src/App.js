import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
// import Cuts from './components/pages/Cuts';
// import AboutUs from './components/pages/AboutUs';
import BookNow from './components/pages/BookNow';
import CutDataContext from './components/CutDataContext';
import React, { Suspense, useState } from 'react';
import LoadingPage from './components/LoadingPage';

// import Cut from './components/Cut';
import AutoScrollToTop from './components/AutoScrollToTop';
const LazyCuts = React.lazy(() => import('./components/pages/Cuts'))
const LazyCut = React.lazy(() => import('./components/Cut'))
const LazyAboutUs = React.lazy(() => import('./components/pages/AboutUs'))

function App() {
  const [cutData, setCutData] = useState([
    {
      id: 'fades',
      key: 1,
      thumbnail: './images/Fades/fade-1.JPG',
      galleryImgs: [
        {
        img1: './images/Fades/fade-6.JPG'
        },
        {
          img2: './images/Fades/fade-3.JPG'
        },
        {
          img3: './images/Fades/fade-4.JPG'
        },
        {
          img4: './images/Fades/fade-2.JPG'
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
      thumbnail: './images/Tapers/Taper-1.JPG',
      galleryImgs: [
        {
        img1: './images/Tapers/Taper-4.JPG'
        },
        {
          img2: './images/Tapers/Taper-3.JPG'
        },
        {
          img3: './images/Tapers/Taper-5.JPG'
        },
        {
          img4: './images/Tapers/Taper-2.JPG'
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
      thumbnail: './images/Designs/design-2.JPG',
      galleryImgs: [
        {
        img1: './images/Designs/design-1.JPG'
        },
        {
          img2: './images/Designs/design-2.JPG'
        },
        {
          img3: './images/Designs/design-3.JPG'
        },
        {
          img4: './images/Designs/design-4.jpg'
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

  return (
    <CutDataContext.Provider value={{cutData}}>
      <div className="App">
        <Navbar />
        <AutoScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/haircuts' exact element={<Suspense fallback={<LoadingPage />}> <LazyCuts /> </Suspense> }/>
          <Route path='/haircut/:id' element={<Suspense fallback={<LoadingPage />}> <LazyCut cutData={cutData} /> </Suspense>} />
          <Route path='/aboutus' exact element={<Suspense fallback={<LoadingPage />}> <LazyAboutUs /> </Suspense>}/>
          <Route path='/booknow' exact element={<BookNow />}/>
        </Routes>
      </div>
    </CutDataContext.Provider>
  );
}

export default App;
