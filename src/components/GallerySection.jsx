import milkBottleDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
import orangeDesktop from "../assets/desktop/image-gallery-orange.jpg";
import coneDesktop from "../assets/desktop/image-gallery-cone.jpg";
import sugarCubesDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg";

import milkBottleMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg";
import coneMobile from "../assets/mobile/image-gallery-cone.jpg";
import sugarCubesMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <div style={galleryStyles}>
      <picture>
        <source media="(max-width: 768px)" srcSet={milkBottleMobile} />
        <img src={milkBottleDesktop} alt="milk bottle" style={imgStyles} />
      </picture>

      <picture>
        <source media="(max-width: 768px)" srcSet={orangeMobile} />
        <img src={orangeDesktop} alt="orange" style={imgStyles} />
      </picture>

      <picture>
        <source media="(max-width: 768px)" srcSet={coneMobile} />
        <img src={coneDesktop} alt="cone" style={imgStyles} />
      </picture>

      <picture>
        <source media="(max-width: 768px)" srcSet={sugarCubesMobile} />
        <img src={sugarCubesDesktop} alt="sugar cubes" style={imgStyles} />
      </picture>
    </div>
  );
};

const galleryStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // default 4 per row
  overflow: "hidden",
};

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

// Mobile media query with inline CSS via JS
// Injects style when screen size changes
if (window.innerWidth <= 768) {
  galleryStyles.gridTemplateColumns = "repeat(2, 1fr)"; // 2 per row on mobile
}

export { Gallery };
