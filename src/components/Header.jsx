import HeroContent from "../components/HeroContent"
import Nav from "../components/Nav"


const Header = () => {
    return(
        <div className="header" style={{background: 'hsl(198, 96%, 60%)', overflow: 'hidden'}}>
            <Nav/>
            <HeroContent/>
        </div>
    )
}
export default Header