const Card = ({ title, description, image, link, overlay, background }) =>{
  const cardStyle =  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(background ? { backgroundColor: background } : {}), // only adds background if passed
  };;

  return (
    <div className={`card ${overlay ? "overlay-card" : ""}`} style={cardStyle}>
        {overlay ? (
          <div className="overlay-container">
            <img src={image} alt={title || "card image"} />
            <div className="overlay-text">
              {title && <h2 className="heading_1">{title}</h2>}
              {description && <p>{description}</p>}
            </div>
          </div>
        ) : (
        <div>
          {image && <img src={image} alt={title || "card image"} />}
          {title && <h2 className="heading_2" style={{fontSize:'2.5rem', width:'60%', paddingLeft: '50px', color:'var(--Grey_950)'}}>{title}</h2>}
          {description && <p style={{width:'70%', paddingLeft: '50px', margin: '30px 0', color: 'var(--Grey_550)', lineHeight:'1.5'}}>{description}</p>}
          {link && <a href={link} className="heading_1" style={{marginLeft: '50px', textTransform:'uppercase', color:'var(--Grey_950)', textDecoration: 'none',boxShadow: 'inset 0 -6px 0 0 rgb(249, 211, 165)', borderRadius: '9px'}}>Learn more</a>}
        </div>
        )}
    </div>
  );
}
export default Card