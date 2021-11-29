import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.error('The wallet is not connected');
        return;
      } else {
        console.log('The wallet is connected', ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found authorized account', account);
        setCurrentAccount(account);
      } else {
        console.error('Not authorized account found');
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Implement the connect Wallet method for the user to connect their Metamask account.
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('You need Metamask installed!');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      console.log('Connected account', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const wave = () => {

  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

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

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect your wallet
          </button>
        )}
      </div>
    </div>
  );
}
