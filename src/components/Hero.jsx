import Button from "./Button"
import './Hero.css'


function Hero() {
  return (
    <div className="hero-container">
       {/* <video src="" autoPlay loop muted></video> */}
        <h1>Best Barber in Vegas</h1>
        <p>Look better than ever</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Get Cut
            </Button>
        </div>
    </div>
  )
}

export default Hero