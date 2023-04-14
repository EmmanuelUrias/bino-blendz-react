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
            Las Vegas<br/>Celebrity Experience
            </p>

        </section>
        <div className='footer-links'>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/aboutus'>Read even more on us</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/booknow'>Make an Appointment</Link>
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
                    <a href='' className="social-icons-link" target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href='https://www.instagram.com/bino.blendz/' className="social-icons-link" target='_blank' aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='' className="social-icons-link" target='_blank' aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer