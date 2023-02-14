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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet accumsan ipsum. Sed tristique urna a massa rhoncus, in pharetra sapien congue. Fusce id enim vel lectus lobortis accumsan. </p>
          </section>
          <section>
            <h2>Me</h2>
            <ul>
              <li>Alexis ?</li>
            </ul>
          </section>
          <section>
            <h2>My Goals</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet accumsan ipsum. Sed tristique urna a massa rhoncus, in pharetra sapien congue. Fusce id enim vel lectus lobortis accumsan. </p>
          </section>
        </main>
    </div>
    <Footer />
    </div>
  )
}

export default AboutUs