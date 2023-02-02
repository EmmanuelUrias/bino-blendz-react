import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Hero from './components/Hero';
import Cuts from './components/pages/Cuts';
import AboutUs from './components/pages/AboutUs';
import BookNow from './components/pages/BookNow';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Hero/>*/}
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/cuts' exact element={<Cuts />}/>
        <Route path='/aboutus' exact element={<AboutUs />}/>
        <Route path='/booknow' exact element={<BookNow />}/>
      </Routes>
    </div>
  );
}

export default App;
