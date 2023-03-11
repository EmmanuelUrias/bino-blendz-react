import '../AboutUsPage.css'
import Footer from '../Footer'
import '../Footer.css'

function AboutUs() {
  return (
    <div>
    <div className='aboutus'>
        <header>About Us</header>
        <main>
          <section>
            <h2>My Story</h2>
            <p>In my sophomore year of highschool, I decided to take up barbering as a hobby within minutes of just researching the craft I fell in love. Ever since, I have been reflecting on my craft and devoting myself to being the best barber I can be.</p>
          </section>
          <section>
            <h2>Me</h2>
            <ul>
              <li>Alexis ?</li>
            </ul>
          </section>
          <section>
            <h2>My Goals</h2>
            <p>After seeing other barbers become successful and gain financial freedom through barbering, I knew that's what I wanted. On my way to the top, I've cut up various celebrities like all of Grupo Frontera, David Valdez, Jhonny Caz, and many more. Through barbering, I realized my potential. And I won't stop working until I get what I'm after.</p>
          </section>
        </main>
    </div>
    <Footer />
    </div>
  )
}

export default AboutUs