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
      id: 1,
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
      title: 'High Fade',
      text: 'Get fresh',
      label: 'High Fade',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '$35',
      path: '/cut/1'
  }, {
      id: 2,
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
      title: 'High Fade',
      text:'Get cut',
      label: 'High Fade',
      description: '',
      path: '/cut/2'
  }, {
      id: 3,
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
      title: 'High Fade',      
      text: 'Get laid',
      label: 'High Fade',
      description: '',
      path: '/cut/3'
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
          <Route path='/cuts' exact element={<Cuts />}/>
          <Route path='/cut/:id' element={<Cut cutData={cutData} />} />
          <Route path='/aboutus' exact element={<AboutUs />}/>
          <Route path='/booknow' exact element={<BookNow />}/>
        </Routes>
      </div>
    </CutDataContext.Provider>
  );
}

export default App;
