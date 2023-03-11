import Button from "./Button"
import './Hero.css'


function Hero() {
  return (
    <div className="hero-container">
       {/* <video src="" autoPlay loop muted></video> */}
        <h1>Las Vegas<br/>Celebrity Experience</h1>
        <p>Feel Better Than Ever</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Get Cut
            </Button>
        </div>
    </div>
  )
}

export default Hero