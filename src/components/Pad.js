import React from "react";
import { bank1 } from "./App"

function Pad({ handleClick, power, backgroundStyle, element, id }) {
  const audioRef = React.useRef(null);
  
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  });
  
  const handleKeyPress = e => {
    if (e.keyCode === id.charCodeAt(0)) {
      playSound();
    }
  }
  
  const playSound = () => {
    if (power) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      handleClick(bank1[element].name);
    }
  }
  
  return (
    <button
      data-tag={id}
      type='button'
      className='drum-pad'
      onClick={playSound}
      id={bank1[element].name}
      disabled={!power}
      style={{background: `${backgroundStyle}`}}>
      {element}
      <audio ref={audioRef} src={bank1[element].source} className='clip'></audio>
    </button>
  );
}

export default Pad;
