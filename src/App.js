import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {

  }

  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
          👋 Hi everyone!
        </div>

        <div className="bio">
          I'm Rodrigo!<br /> Connect your Ethereum wallet and Ask Me Anything!
        </div>

        <button className="waveButton" onClick={wave}>
          AMA now
        </button>
      </div>
    </div>
  );
}
