import React from "react";
import Part from "./Part";

const Avatar = ({
  body,
  eyes,
  hair,
  mouths,
  eyebrows,
  clothing_1,
  clothing_2,
  clothing_3,
  earrings,
  glasses,
  hats,
  neckwear,
}) => {
  return (
    <div className="avatar">
      <Part path="body" zIndex="12" index={body} />
      <Part path="eyes" zIndex="12" index={eyes} />
      <Part path="hair" zIndex="13" index={hair} />
      <Part path="mouths" zIndex="12" index={mouths} />
      <Part path="eyebrows" zIndex="12" index={eyebrows} />
      <Part path="noses" zIndex="12" index={1} />
      <Part path="clothes/layer_1" zIndex="12" index={clothing_1} />
      <Part path="clothes/layer_2" zIndex="12" index={clothing_2} />
      <Part path="clothes/layer_3" zIndex="12" index={clothing_3} />
      <Part path="accessories/earrings" zIndex="12" index={earrings} />
      <Part path="accessories/glasses" zIndex="12" index={glasses} />
      <Part path="accessories/hats" zIndex="13" index={hats} />
      <Part path="accessories/neckwear" zIndex="12" index={neckwear} />
    </div>
  );
};

export default Avatar;
