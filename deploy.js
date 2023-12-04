const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const provider = new HDWalletProvider(
  "rival space find loop shrimp exile member yard safe bulb public glass",
  "https://sepolia.infura.io/v3/609d10eda779441584ac03cb0802e383"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`giving me ${accounts[0]}`);
  const results = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
  console.log(results.options.address);
  provider.engine.stop();
};
deploy();
