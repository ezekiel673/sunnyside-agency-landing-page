import Header from "./components/Header"
import Card from "./components/Card"
import Testimonials from "./components/Testimonials"
import { Gallery } from "./components/GallerySection"
import Footer from "./components/Footer"
import img2 from "./assets/desktop/image-transform.jpg"
import img3 from "./assets/desktop/image-stand-out.jpg"
import img5 from "./assets/desktop/image-graphic-design.jpg"
import img6 from "./assets/desktop/image-photography.jpg"
import './App.css'

const cardsData = [
  {
    title: "Transform your brand",
    description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.", 
    link: "#"
  },
  {
    image: img2,
  },
  {
    image: img3,
    background: 'hsl(7, 99%, 70%)'
  },
  {
    title: "Stand out to the right audience",
    description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places", 
    link: "#"
  },
  {
    image: img5,
    title: "Graphic design",
    description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention",
    overlay: true
  },
  {
    image: img6,
    title: "Photography",
    description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    overlay: true
  }
];

function App() {
  return (
    <>
      <Header/>
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            overlay = {card.overlay}
            background={card.background}
          />
        ))}
      </div>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
