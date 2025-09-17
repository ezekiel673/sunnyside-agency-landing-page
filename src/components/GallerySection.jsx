import milkBottle from '../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/desktop/image-gallery-orange.jpg'
import cone from '../assets/desktop/image-gallery-cone.jpg'
import sugarCubes from '../assets/desktop/image-gallery-sugarcubes.jpg'
const Gallery = () => {
    return(
        <div style={galleryStyles}>
            <div><img src={milkBottle} alt="bottle" style={imgStyles}/></div>
            <div><img src={orange} alt="orange" style={imgStyles} /></div>
            <div><img src={cone} alt="cone" style={imgStyles} /></div>
            <div><img src={sugarCubes} alt="sugar-cubes" style={imgStyles} /></div>
        </div>
    )
}

const galleryStyles = {
    display: 'flex',
    overFlow:'hidden', 
}

const imgStyles ={
    width:'100%',
    height:'100%',
}
export{Gallery}