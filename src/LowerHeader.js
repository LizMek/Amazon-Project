import React from "react";
import'./LowerHeader.css';

const LowerHeader = () => {
  return (
    <div className="lower-header">
      <div className="lower-header__menu">
        <span className="lower-header__icon">☰</span>
        <span className="lower-header__item">All</span>
      </div>
      <div className="lower-header__links">
        <span className="lower-header__item">Same-Day Delivery</span>
        <div className="lower-header__dropdown">
          <span className="lower-header__item">Medical Care</span>
          <span className="lower-header__arrow">▼</span>
        </div>
        <span className="lower-header__item">Prime Video</span>
        <span className="lower-header__item">Buy Again</span>
        <div className="lower-header__dropdown">
          <span className="lower-header__item">Groceries</span>
          <span className="lower-header__arrow">▼</span>
        </div>
        <span className="lower-header__item">
          Household, Health & Baby Care
        </span>
        <span className="lower-header__item">Amazon Business</span>
        <span className="lower-header__item">Amazon Basics</span>
        <span className="lower-header__item">Livestreams</span>
      </div>
    </div>
  );
};

export default LowerHeader;
