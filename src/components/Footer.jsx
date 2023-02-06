import React from 'react'
import Button from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-booknow">
            <p className="footer-booknow-heading">
                Book Now with BinoBlendz
            </p>
            <p className="footer-booknow-text">
                bloop blop
            </p>
            <div className="input-area">
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'></input>
                    <Button buttonStyle='btn-outline'>Book Now</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/booknow'>Make an Appointment</Link>
                    <Link to='/cuts'>View a variety of haircuts</Link>
                    <Link to='/aboutus'>Read even more on us</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/booknow'>Make an Appointment</Link>
                    <Link to='/cuts'>View a variety of haircuts</Link>
                    <Link to='/aboutus'>Read even more on us</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/booknow'>Make an Appointment</Link>
                    <Link to='/cuts'>View a variety of haircuts</Link>
                    <Link to='/aboutus'>Read even more on us</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Other Barbers</h2>
                    <Link to='/booknow'>Make an Appointment</Link>
                    <Link to='/cuts'>View a variety of haircuts</Link>
                    <Link to='/aboutus'>Read even more on us</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/aboutus' className="social-logo">
                    BinoBlendz<i class="fa-solid fa-scissors"></i>
                    </Link>
                </div>
                <small className="website-rights">BinoBlendz © 2023</small>
                <div className="social-icons">
                    <Link to='/' className="social-icons-link" target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook'></i>
                    </Link>
                    <Link to='/' className="social-icons-link" target='_blank' aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link to='/' className="social-icons-link" target='_blank' aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer