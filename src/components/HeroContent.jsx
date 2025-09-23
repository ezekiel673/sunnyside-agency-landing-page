import desktopHeader from "../assets/desktop/image-header.jpg";
import mobileHeader from "../assets/mobile/image-header.jpg"; 
import arrow_down from "../assets/icon-arrow-down.svg";

const HeroContent = () => {
  return (
    <section style={sectionStyles}>
      <picture style={{ gridArea: "1/1" }}>
        <source srcSet={mobileHeader} media="(max-width: 768px)" />
        <img src={desktopHeader} alt="header image" style={imgStyles} />
      </picture>

      <div style={overlayStyles}>
        <h1
          className="heading_1"
          style={{
            color: "var(--White)",
            fontSize: "3rem",
            letterSpacing: "3px",
            wordSpacing: "15px",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          We are creatives
        </h1>
        <img src={arrow_down} alt="arrow" />
      </div>
    </section>
  );
};

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  gridArea: "1/1",
};

const sectionStyles = {
  position: "relative",
  display: "grid",
  gridTemplateAreas: `"stack"`,
  placeItems: "center", 
  overflow: "hidden",
};

const overlayStyles = {
  gridArea: "1/1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};

export default HeroContent;

