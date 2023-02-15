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

function App() {
  const [cutData, setCutData] = useState([
    {
      id: 1,
      src: './images/coolImg.jpg',
      text: 'Get fresh',
      label: 'High Fade',
      path: '/cut/1'
  }, {
      id: 2,
      src: './images/coolImg.jpg',
      text:'Get cut',
      label: 'High Fade',
      path: '/cut/2'
  }, {
      id: 3,
      src: './images/coolImg.jpg',
      text: 'Get laid',
      label: 'High Fade',
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
