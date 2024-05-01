import React from 'react';

function script2() {
  // Function to open navigation
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("start").style.marginLeft = "0";
  }
  
  // Function to close navigation
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("start").style.marginLeft = "0";
  }

  // Function to send Ethereum to an address
  const sendEthButton = document.querySelector('.sendEthButton');
  const ethereumButton = document.querySelector('.sendEthButton');
  let accounts = [];

  sendEthButton.addEventListener('click', () => {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: '0xBA23FFb7f86001F69266B56809E2Ef32d8287545',
            value: 'c6f3b40b6c000',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  });

  ethereumButton.addEventListener('click', () => {
    getAccount();
  });

  async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  }

  // Return null since this is not UI, just functionality
  return null;
}

export default script2;
