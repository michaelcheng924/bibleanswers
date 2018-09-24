import React from "react";

const Title = ({
  added,
  imagePosition = "30% 70%",
  imageUrl,
  subtitle,
  title,
  updated
}) => {
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

      <div
        className="cover-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: imagePosition
        }}
      />
    </div>
  );
};

export default Title;
