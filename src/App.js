import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Hero from './components/Hero';
import Cuts from './components/pages/Cuts';
import AboutUs from './components/pages/AboutUs';
import BookNow from './components/pages/BookNow';
import Cut from './components/Gallery/Cut';
import ImageGalleryCardItem from './components/Gallery/ImageGalleryCardItem';
import CutPage from './components/pages/CutPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/cuts' exact element={<Cuts />}/>
        <Route path='/cut' element={<CutPage />}/>
        <Route path='/aboutus' exact element={<AboutUs />}/>
        <Route path='/booknow' exact element={<BookNow />}/>
      </Routes>
    </div>
  );
}

export default App;
