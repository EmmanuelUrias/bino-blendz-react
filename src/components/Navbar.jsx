import './Navbar.css'

import Button from './Button'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    //BUGS!!: When the page is minimized and you scroll to the left the navbar does not follow it 

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 968) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    // ^^ stops the re-render of the button component 

    window.addEventListener('resize', showButton)

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    BinoBlendz<i class="fa-solid fa-scissors"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/haircuts' className='nav-links' onClick={closeMobileMenu}>
                            Haircuts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/booknow' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Book Now
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Book Now</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar