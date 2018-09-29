import React from "react";

const Title = ({ added, imageUrl, subtitle, title, updated }) => {
  return (
    <div className="title-section">
      <div className="title-info-container">
        <div className="title-info">
          <h1>{title}</h1>
          <div className="subtitle">{subtitle}</div>
          <div className="date">
            {updated ? `Updated: ${updated}` : added ? `Added: ${added}` : null}
          </div>
          <div className="divider">...</div>
        </div>
      </div>

      <div className="cover-image-container">
        <img className="cover-image" src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Title;
