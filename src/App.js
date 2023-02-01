import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Hero/>*/}
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/cuts' exact />
        <Route path='/aboutus' exact />
        <Route path='/booknow' exact />
      </Routes>
    </div>
  );
}

export default App;
