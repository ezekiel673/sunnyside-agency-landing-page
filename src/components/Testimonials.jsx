import imageEmily from "../assets/image-emily.jpg"
import imageThomas from "../assets/image-thomas.jpg"
import imageJennie from "../assets/image-jennie.jpg"
const Testimonials = () => {
    return(
        <>
            <h2 className="heading_1" style={{textAlign:'center', color: 'var(--Grey_550)', fontSize:'2.5rem', textTransform:'uppercase', margin:'3em 0 2em 0', letterSpacing:'8px'}}>Client testimonials</h2>
            <div className="testimonial-card" style={testimonialStyles}>
                <div className="clients">
                    <img src={imageEmily} alt="imageEmily" style={{borderRadius:'50%', margin: '2em'}} />
                    <p style={{ margin: '2em', lineHeight:'1.5', color: 'var(--Grey_600'}}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. </p>
                    <h3 className="heading_1" style={{color:'var(--Grey_950)'}}>Emily R.</h3>
                    <p style={{color:'var(--Grey_550)', marginTop:'8px'}}>Marketing Director</p>
                </div>
                <div className="clients">
                    <img src={imageThomas} alt="imageThomas" style={{borderRadius:'50%', margin: '2em'}}/>
                    <p style={{ margin: '2em', lineHeight:'1.5', color: 'var(--Grey_600)'}}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. </p>
                    <h3 className="heading_1" style={{color:'var(--Grey_950)'}}>Thomas S.</h3>
                    <p style={{color:'var(--Grey_550)', marginTop:'8px'}}>Chief Operating Officer</p>
                </div>
                <div className="clients">
                    <img src={imageJennie} alt="imageJennie" style={{borderRadius:'50%', margin: '2em'}} />
                    <p style={{ margin: '2em', lineHeight:'1.5', color: 'var(--Grey_600'}}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <h3 className="heading_1" style={{color:'var(--Grey_950)'}}>Jennie F.</h3>
                    <p style={{color:'var(--Grey_550)', marginTop:'8px'}}>Business Owner </p>
                </div>
            </div>
        </>
    )
}

const testimonialStyles = {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    textAlign: 'center',
    placeSelf: 'center',
    gap: '15px',
    marginBottom:'5em'
}
export default Testimonials