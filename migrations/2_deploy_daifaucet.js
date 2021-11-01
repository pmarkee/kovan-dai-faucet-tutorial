const DaiFaucet = artifacts.require("DaiFaucet");

module.exports = (deployer) => {
  deployer.deploy(DaiFaucet, "dai faucet");
};
