import desktopHeader from "../assets/desktop/image-header.jpg";
import mobileHeader from "../assets/mobile/image-header.jpg"; 
import arrow_down from "../assets/icon-arrow-down.svg";

const HeroContent = () => {
  return (
    <section style={sectionStyles}>
      <div
        className="overlay"
        style={{
          display: "flex",
          gap: "11em",
          flexDirection: "column",
          alignItems: "center",
          gridArea: "1/1",
          zIndex: "1",
        }}
      >
        <h1
          className="heading_1"
          style={{
            color: "var(--White)",
            fontSize: "3rem",
            letterSpacing: "3px",
            wordSpacing: "15px",
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: "2em",
          }}
        >
          We are creatives
        </h1>
        <img src={arrow_down} alt="arrow" style={{ textAlign: "center" }} />
      </div>

      {/* Picture element automatically switches image */}
      <picture style={{ gridArea: "1/1" }}>
        <source srcSet={mobileHeader} media="(max-width: 768px)" />
        <img src={desktopHeader} alt="header image" style={imgStyles} />
      </picture>
    </section>
  );
};

const imgStyles = {
  width: "100%",
  height: "100%",
  gridArea: "1/1",
  objectFit: "cover",
};

const sectionStyles = {
  background: "hsl(198, 98%, 60%)",
  overflow: "hidden",
  display: "grid",
};

export default HeroContent;
