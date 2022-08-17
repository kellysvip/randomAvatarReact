import React from "react";

const PartList = ({ path, total, handleClick }) => {
  let parts = [];

  for (let index = 1; index <= total; index++) {
    parts.push(
      <div className="square">
        <img
          onClick={handleClick}
          height={60}
          style={{ top: "50%" }}
          alt={path + index}
          src={`https://character-customization.netlify.app/character/${path}/${index}.png`}
          id={`${index}-body`}
          className={path}
        />
      </div>
    );
  }
  return <div className="list">{parts}</div>;
};

export default PartList;
