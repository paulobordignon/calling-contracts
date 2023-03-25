const hre = require("hardhat");

async function main() {
  const getContract = await hre.ethers.getContractFactory("CallContract");
  const contractDeployed = await getContract.deploy();

  console.log(`Contract was deployed to ${contractDeployed.address}`)

  const tx = await contractDeployed.callWinner(process.env.EXTERNAL_CONTRACT_ADDRESS);
  console.log(tx)

  /* Contract was deployed to 0xB3Bf5F9b1897Fe584831d1f708cB9d4ca5CBC354
  {
    hash: '0x529ae5d35b51838f3165293ca93f727d81f5ed0725ba5562eb6135be9beef98f',
    type: 2,
    accessList: [],
    blockHash: null,
    blockNumber: null,
    transactionIndex: null,
    confirmations: 0,
    from: '0x060953B71dfB33278127585a1a95aeC994aA806c',
    gasPrice: BigNumber { value: "21691059876" },
    maxPriorityFeePerGas: BigNumber { value: "1151670553" },
    maxFeePerGas: BigNumber { value: "21691059876" },
    gasLimit: BigNumber { value: "26098" },
    to: '0xB3Bf5F9b1897Fe584831d1f708cB9d4ca5CBC354',
    value: BigNumber { value: "0" },
    nonce: 17,
    data: '0xbef097e2000000000000000000000000cf469d3beb3fc24cee979eff83be33ed50988502',
    r: '0x1ea02e732433740594b1d76034f11350482283ca3a2324155b498eb3e19d4c50',
    s: '0x2383e4d13c6cf580ba72c97b0e0fb8d917df74930ae96b8a01a894a6e9c3e800',
    v: 0,
    creates: null,
    chainId: 5,
    wait: [Function (anonymous)]
  } */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
