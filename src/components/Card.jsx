import React, { useState, useEffect } from "react";

const Card = ({ title, description, imageDesktop, imageMobile, link, overlay, background, order, index }) => {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: overlay ? "column" : "row",
    ...(background ? { backgroundColor: background } : {}),
    order,
    width: "100%",
    minHeight: "100vh",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", 
    display: "block",
  };

  const underlineColors = [
    "var(--Yellow_500)", 
    "var(--Red_400)", 
  ];

  return (
    <div className={`card ${overlay ? "overlay-card" : ""}`} style={cardStyle}>
      {overlay ? (
        <div
          className="overlay-container"
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={imageMobile} />
            <img src={imageDesktop} alt={title || "card image"} style={imgStyle} />
          </picture>

          <div
            className="overlay-text"
            style={{
              position: "absolute",
              bottom: "20%",
              textAlign: "center",
              width: "100%",
            }}
          >
            {title && <h2 className="heading_1">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, padding: "50px" }}>
          {imageDesktop && (
            <picture>
              <source media="(max-width: 768px)" srcSet={imageMobile} />
              <img src={imageDesktop} alt={title || "card image"} style={imgStyle} />
            </picture>
          )}

          {title && (
            <h2
              className="heading_2"
              style={{
                fontSize: "2.5rem",
                width: isMobile ? "90%" : "60%",
                color: "var(--Grey_950)",
                margin: isMobile ? "20px auto 0" : "20px 0 0 70px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              style={{
                width: isMobile ? "90%" : "70%",
                margin: isMobile ? "30px auto" : "30px 0 30px 70px",
                color: "var(--Grey_550)",
                lineHeight: "1.5",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {description}
            </p>
          )}

          {link && (
            <a
              href={link}
              className="heading_1 learn-more"
              style={{
                textTransform: "uppercase",
                color: "var(--Grey_950)",
                textDecoration: "none",
                position: "relative",
                display: isMobile ? "block" : "inline-block", // <-- block on mobile so margin auto centers it
                paddingBottom: "6px",
                margin: isMobile ? "20px 30%" : "0 0 0 70px",
                textAlign: "center",
              }}
              data-index={index}
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

