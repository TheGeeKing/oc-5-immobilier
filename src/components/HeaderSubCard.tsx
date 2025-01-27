import React from "react";
import "./HeaderSubCard.scss";

export const HeaderSubCard = ({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text?: string;
}) => {
  return (
    <div id="header-sub-card">
      <img src={src} alt={alt} />
      <div className="placeholder-gray"></div>
      {text ? <div className="placeholder-text">{text}</div> : null}
    </div>
  );
};
