import React from 'react';

const Card = ({ image, title, description, children }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;