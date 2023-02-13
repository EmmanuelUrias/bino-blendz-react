import CardItem from "../CardItem"
import Footer from "../Footer"
import Hero from "../Hero"
import Cards from "../Cards"

function Home() {

  // Write .map method that creates each <CardItem/> in the array
  //Pass the cardData to the cards and cardItemPage through useContext
  //Make Cards it's own component but also the parent to CardItemPage


  return (
    <div>
        <Hero />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home