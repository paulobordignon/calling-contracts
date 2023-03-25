// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IContractWinner {
  function attempt() external;
}

contract CallContract {
  function callWinner(address contractAddress) external {
    IContractWinner(contractAddress).attempt();
  }
}
