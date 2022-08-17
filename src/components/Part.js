import React from 'react'

const Part = ({path, zIndex, index}) => {
  return (
    <img
    src={`https://character-customization.netlify.app/character/${path}/${index}.png`}
    alt={path + index}
    style={{zIndex, position: "absolute", left:0, top:0}}
    />
  )
}

export default Part
