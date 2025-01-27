import React from "react";
import "./DropDown.scss";
import ArrowUp from "@/assets/arrow_up.svg?react";

interface DropDownProps {
  name: string;
  items: string[];
}

export const DropDown: React.FC<DropDownProps> = ({ name, items = [] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div
        className="dropdown-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{name}</span>
        <span>
          <ArrowUp />
        </span>
      </div>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
