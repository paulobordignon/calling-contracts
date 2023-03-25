#### Emit the Winner event

The goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

```
contract Contract {
  event Winner(address);

  function attempt() external {
      require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
      emit Winner(msg.sender);
  }
}
```

How do we possibly make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender?

For this, you need to call a contract that will call that another contract.

msg.sender is the account that directly calls the function (in this case my contract address). tx.orgin is the address that first initiated the transaction (my wallet address).

I implemented the contract and deployed:
`` npx hardhat run scripts/deploy.js --network goerli ``

The Winner event:
https://goerli.etherscan.io/tx/0x529ae5d35b51838f3165293ca93f727d81f5ed0725ba5562eb6135be9beef98f

The contract:
0xB3Bf5F9b1897Fe584831d1f708cB9d4ca5CBC354
