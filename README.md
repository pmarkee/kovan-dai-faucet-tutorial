# Kovan DAI faucet

This project's purpose was to learn how to interact with DAI (and contracts in general) on an actual Ethereum network following the [tutorial by MakerDAO](https://github.com/makerdao/developerguides/blob/master/dai/dai-in-smart-contracts/dai-in-smart-contracts.md#deploy-smart-contract).

## Steps

1. get yourself a [Metamask](https://metamask.io/) wallet and connect to the the [Kovan Test Network](https://kovan-testnet.github.io/website/) (upper menu in Metamask). It's important that you don't use the Mainnet for this otherwise you will spend real money.
2. get some fake Eth on using a faucet. [This one](https://faucets.chain.link/) worked for me but you may need to do some searching. Note, this one only gives you 0.1 Eth at a time, you will probably need more. I got 1 whole ETH, it will be enough no matter w hat.
3. get some fake DAI. I found no faucets that worked, but you can use the [Oasis App](https://oasis.app/?network=kovan) to deposit some fake Eth and get a loan of fake Dai. Note, the `?network=kovan` part of the URL is required.
4. clone this repo and run `yarn install`. If you don't already have your local development environment setup, do that. If you don't know how -> Google.
5. create your `.secret` file in the root of the project. It should contain either the passphrase or private key of your Metamask wallet.
6. create your `.apikey` file. For this you need to sign up for [Infura](https://infura.io/) and create an Ethereum project. There in settings you will find a Project Id. This is your API key.
7. `truffle compile` just to make sure everything is okay before you deploy.
8. deploy with `truffle migrate --network=kovan` and you're ready to test. You can use Etherscan as shown in the tutorial or `truffle console`.

## Resources

[Metamask](https://metamask.io/)  
[Kovan Test Network](https://kovan-testnet.github.io/website/)  
[Chainlink KEth faucet](https://faucets.chain.link/)  
[Oasis App](https://oasis.app/?network=kovan)  
[Tutorial by MakerDAO](https://github.com/makerdao/developerguides/blob/master/dai/dai-in-smart-contracts/dai-in-smart-contracts.md#deploy-smart-contract)  
[How to deploy to Kovan from local dev env](https://pixelplex.io/blog/how-to-deploy-ethereum-smart-contracts/)
