const Card = ({ title, description, imageDesktop, imageMobile, link, overlay, background, order }) => {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(background ? { backgroundColor: background } : {}),
    order, // allows us to reorder in CSS
  };

  return (
    <div className={`card ${overlay ? "overlay-card" : ""}`} style={cardStyle}>
      {overlay ? (
        <div className="overlay-container">
          <picture>
            <source media="(max-width: 768px)" srcSet={imageMobile} />
            <img src={imageDesktop} alt={title || "card image"} />
          </picture>
          <div className="overlay-text">
            {title && <h2 className="heading_1">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      ) : (
        <div>
          {imageDesktop && (
            <picture>
              <source media="(max-width: 768px)" srcSet={imageMobile} />
              <img src={imageDesktop} alt={title || "card image"} />
            </picture>
          )}
          {title && (
            <h2
              className="heading_2"
              style={{
                fontSize: "2.5rem",
                width: "60%",
                paddingLeft: "50px",
                color: "var(--Grey_950)",
              }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              style={{
                width: "70%",
                paddingLeft: "50px",
                margin: "30px 0",
                color: "var(--Grey_550)",
                lineHeight: "1.5",
              }}
            >
              {description}
            </p>
          )}
          {link && (
            <a
              href={link}
              className="heading_1"
              style={{
                marginLeft: "50px",
                textTransform: "uppercase",
                color: "var(--Grey_950)",
                textDecoration: "none",
                boxShadow: "inset 0 -6px 0 0 rgb(249, 211, 165)",
                borderRadius: "9px",
              }}
            >
              Learn more
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
