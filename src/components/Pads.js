import React from "react";
import Pad from "./Pad";
import { bank1 } from "./App"

function Pads() {
  const keypadCode = Object.keys(bank1);

  const [displayText, setDisplayText] = React.useState("");

  const [power, setPower] = React.useState(true);
  const handlePowerChange = () => {
    setPower(!power);
    if (!power) {
      setDisplayText("");
    }
  }

  const [volume, setVolume] = React.useState(50);
  const handleVolumeChange = e => {
    setVolume(e.target.value);
    setDisplayText(`Volume: ${e.target.value}`);
  }

  const handleClick = name => {
    setDisplayText(name);
  }

  return (
    <div id='div-pads'>
      {keypadCode.map((pad, idx) => {
        return (
          <Pad
            id={pad + idx}
            key={pad + idx}
            handleClick={handleClick}
            power={power}
            backgroundStyle={power ? 'lightsalmon' : 'lightgray'}
            element={pad} />
        );
      })}
      <div id='display'>{displayText}</div>
      <div id='control-screen'>
        <label id='label-power'>
          <input type='checkbox' id='power' checked={power} onChange={handlePowerChange} />
          <span className='checkmark'>{power ? 'On' : 'Off'}</span>
        </label>
        <label id='label-volume'>
          <input type='range' id='volume' value={volume} min='0' max='100' onChange={handleVolumeChange} />
          <span id='volume-display'>{`Volume: ${volume}`}</span>
        </label>
      </div>
    </div>
  )
}

export default Pads;
