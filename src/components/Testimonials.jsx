import imageEmily from "../assets/image-emily.jpg";
import imageThomas from "../assets/image-thomas.jpg";
import imageJennie from "../assets/image-jennie.jpg";

const Testimonials = () => {
  return (
    <>
      <h2
        className="heading_1"
        style={{
          textAlign: "center",
          color: "var(--Grey_550)",
          fontSize: "2.5rem",
          textTransform: "uppercase",
          margin: "3em 0 2em 0",
          letterSpacing: "8px",
        }}
      >
        Client testimonials
      </h2>

      <div style={testimonialStyles}>
        <div style={clientStyles}>
          <img
            src={imageEmily}
            alt="Emily R."
            style={{ borderRadius: "50%", margin: "2em" }}
          />
          <p
            style={{
              marginBottom: "2em",
              lineHeight: "1.5",
              color: "var(--Grey_600)",
              textAlign: "center",
            }}
          >
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3 className="heading_1" style={{ color: "var(--Grey_950)" }}>
            Emily R.
          </h3>
          <p style={{ color: "var(--Grey_550)", marginTop: "8px" }}>
            Marketing Director
          </p>
        </div>

        <div style={clientStyles}>
          <img
            src={imageThomas}
            alt="Thomas S."
            style={{ borderRadius: "50%", margin: "2em" }}
          />
          <p
            style={{
              marginBottom: "2em",
              lineHeight: "1.5",
              color: "var(--Grey_600)",
              textAlign: "center",
            }}
          >
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h3 className="heading_1" style={{ color: "var(--Grey_950)" }}>
            Thomas S.
          </h3>
          <p style={{ color: "var(--Grey_550)", marginTop: "8px" }}>
            Chief Operating Officer
          </p>
        </div>

        <div style={clientStyles}>
          <img
            src={imageJennie}
            alt="Jennie F."
            style={{ borderRadius: "50%", margin: "2em" }}
          />
          <p
            style={{
              marginBottom: "2em",
              lineHeight: "1.5",
              color: "var(--Grey_600)",
              textAlign: "center",
            }}
          >
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3 className="heading_1" style={{ color: "var(--Grey_950)" }}>
            Jennie F.
          </h3>
          <p style={{ color: "var(--Grey_550)", marginTop: "8px" }}>
            Business Owner
          </p>
        </div>
      </div>
    </>
  );
};

const testimonialStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  placeSelf: "center",
  gap: "15px",
  marginBottom: "5em",
  flexWrap: "wrap", // ensures wrapping when screen is smaller
};

const clientStyles = {
  flex: "1 1 300px", // responsive width
  maxWidth: "350px",
  textAlign: "center",
  marginRight:'30px'
};

export default Testimonials;
