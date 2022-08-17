import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  eyebrows: 15,
  eyes: 24,
  hair: 73,
  mouths: 24,
  clothing_1: 5,
  clothing_2: 5,
  clothing_3: 9,
  earrings: 32,
  glasses: 17,
  hats: 24,
  neckwear: 18,
};

function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [eyebrows, setEyeBrows] = useState(1);
  const [hair, setHair] = useState(1);
  const [mouths, setMouths] = useState(1);
  const [clothing_1, setClothing_1] = useState(1);
  const [clothing_2, setClothing_2] = useState(1);
  const [clothing_3, setClothing_3] = useState(1);
  const [earrings, setEarrings] = useState(1);
  const [glasses, setGlasses] = useState(1);
  const [hats, setHats] = useState(1);
  const [neckwear, setNeckWear] = useState(1);

  const handleClick = (e) => {
    // setBody(e.target.id.match(/[0-9]+/)[0]);
    switch (e.target.className) {
      case "body":
        setBody(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "eyes":
        setEyes(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "eyebrows":
        setEyeBrows(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "hair":
        setHair(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "mouths":
        setMouths(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "clothes/layer_1":
        setClothing_1(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "clothes/layer_2":
        setClothing_2(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "clothes/layer_3":
        setClothing_3(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "accessories/earrings":
        setEarrings(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "accessories/glasses":
        setGlasses(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "accessories/hats":
        setHats(e.target.id.match(/[0-9]+/)[0]);
        break;
      case "accessories/neckwear":
        setNeckWear(e.target.id.match(/[0-9]+/)[0]);
        break;
      default:
        break;
    }
  };

  const handleRandomAvatar = () => {
    setBody(Math.floor(Math.random() * total.body) + 1);
    setEyes(Math.floor(Math.random() * total.eyes) + 1);
    setEyeBrows(Math.floor(Math.random() * total.eyebrows) + 1);
    setHair(Math.floor(Math.random() * total.hair) + 1);
    setMouths(Math.floor(Math.random() * total.mouths) + 1);
    setClothing_1(Math.floor(Math.random() * total.clothing_1) + 1);
    setClothing_2(Math.floor(Math.random() * total.clothing_2) + 1);
    setClothing_3(Math.floor(Math.random() * total.clothing_3) + 1);
    setEarrings(Math.floor(Math.random() * total.earrings) + 1);
    setGlasses(Math.floor(Math.random() * total.glasses) + 1);
    setHats(Math.floor(Math.random() * total.hats) + 1);
    setNeckWear(Math.floor(Math.random() * total.neckwear) + 1);
  };

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">CUSTOMIZATION</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div className="avatar-wrapper">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            mouths={mouths}
            clothing_1={clothing_1}
            clothing_2={clothing_2}
            clothing_3={clothing_3}
            eyebrows={eyebrows}
            earrings={earrings}
            glasses={glasses}
            hats={hats}
            neckwear={neckwear}
          />
          <button className="btn-random btn" onClick={handleRandomAvatar}>
            RANDOMMIZE
          </button>
        </div>
        <div className="list-wrapper">
          <div className="list-section">
            <h2>Body</h2>

            <PartList
              path="body"
              total={total.body}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <PartList
              path="eyes"
              total={total.eyes}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <PartList
              path="hair"
              total={total.hair}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <PartList
              path="mouths"
              total={total.mouths}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>EyeBrow</h2>
            <PartList
              path="eyebrows"
              total={total.eyebrows}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Clothing 1</h2>
            <PartList
              path="clothes/layer_1"
              total={total.clothing_1}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Clothing 2</h2>
            <PartList
              path="clothes/layer_2"
              total={total.clothing_2}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Clothing 3</h2>
            <PartList
              path="clothes/layer_3"
              total={total.clothing_3}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Earrings</h2>
            <PartList
              path="accessories/earrings"
              total={total.earrings}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <PartList
              path="accessories/glasses"
              total={total.glasses}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Hats</h2>
            <PartList
              path="accessories/hats"
              total={total.hats}
              handleClick={handleClick}
            />
          </div>
          <div className="list-section">
            <h2>Neckwear</h2>
            <PartList
              path="accessories/neckwear"
              total={total.neckwear}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
