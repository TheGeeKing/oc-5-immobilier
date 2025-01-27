import React from "react";
import "./Slideshow.scss";

export const Slideshow = ({ imagesSrc }: { imagesSrc: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const showArrows = imagesSrc.length > 1;

  return (
    <div id="slideshow">
      {showArrows ? (
        <span
          id="slideshow-prev"
          onClick={() =>
            setCurrentImageIndex(
              (prev) => (prev - 1 + imagesSrc.length) % imagesSrc.length
            )
          }
        >
          <img src="/src/assets/arrow_prev.svg" />
        </span>
      ) : null}
      <img
        id="slideshow-img"
        src={imagesSrc[currentImageIndex]}
        alt="Carrousel"
      />
      <p>
        {currentImageIndex + 1}/{imagesSrc.length}
      </p>
      {showArrows ? (
        <span
          id="slideshow-next"
          onClick={() =>
            setCurrentImageIndex((prev) => (prev + 1) % imagesSrc.length)
          }
        >
          <img src="/src/assets/arrow_next.svg" />
        </span>
      ) : null}
    </div>
  );
};
