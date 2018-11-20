import React from "react";

const Tip = props => {
  const { direction } = props;
  const size = props.size || 24;
  const isPortrait = direction === "up" || direction === "down";
  const mainLength = size;
  const crossLength = size * 2;
  const svgProps = {
    className: "Popover-tip",
    width: isPortrait ? crossLength : mainLength,
    height: isPortrait ? mainLength : crossLength
  };

  return (
    <div {...svgProps}>
      <div
        style={{
          background: "#fff",
          borderBottomWidth: 0,
          borderRightWidth: 0,
          boxShadow: "-1px -1px 1px -1px rgba(0,0,0,.54)",
          height: 14,
          transform: "rotate(45deg)",
          width: 14
        }}
      />
    </div>
  );
};

export default Tip;
