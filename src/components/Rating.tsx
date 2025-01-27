import Star from "@/assets/star.svg?react";
import "./Rating.scss";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div id="stars">
      {Array.from({ length: rating }, (_, index) => (
        <Star key={index} className="star active" />
      ))}
      {Array.from({ length: 5 - rating }, (_, index) => (
        <Star key={index} className="star" />
      ))}
    </div>
  );
};
