import Header from "./components/Header"
import Card from "./components/Card"
import Testimonials from "./components/Testimonials"
import { Gallery } from "./components/GallerySection"
import Footer from "./components/Footer"

import img2Desktop from "./assets/desktop/image-transform.jpg";
import img2Mobile from "./assets/mobile/image-transform.jpg";

import img3Desktop from "./assets/desktop/image-stand-out.jpg";
import img3Mobile from "./assets/mobile/image-stand-out.jpg";

import img5Desktop from "./assets/desktop/image-graphic-design.jpg";
import img5Mobile from "./assets/mobile/image-graphic-design.jpg";

import img6Desktop from "./assets/desktop/image-photography.jpg";
import img6Mobile from "./assets/mobile/image-photography.jpg";
import './App.css'

const cardsData = [
  {
    title: "Transform your brand",
    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    link: "#",
    order: 1
  },
  {
    imageDesktop: img2Desktop,
    imageMobile: img2Mobile,
    background: "hsl(51, 100%, 49%)",
    order: 2
  },
  {
    imageDesktop: img3Desktop,
    imageMobile: img3Mobile,
    background: "rgb(255, 111, 97)",
    order: 3
  },
  {
    title: "Stand out to the right audience",
    description:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places",
    link: "#",
    order: 4
  },
  {
    imageDesktop: img5Desktop,
    imageMobile: img5Mobile,
    title: "Graphic design",
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention",
    overlay: true,
    order: 5
  },
  {
    imageDesktop: img6Desktop,
    imageMobile: img6Mobile,
    title: "Photography",
    description:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    overlay: true,
    order: 6
  },
];


function App() {
  return (
    <>
      <Header/>
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            imageDesktop={card.imageDesktop}   
            imageMobile={card.imageMobile}
            link={card.link}
            overlay = {card.overlay}
            background={card.background}
            order={card.order}
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
