"use strict";

const { Contract, utils, getDefaultProvider } = require("ethers");

const config = require("config");

const TOKEN_ADDRESS = config.get("blockchain.apex.address");
const TOKEN_ABI = config.get("blockchain.apex.abi");
const NETWORK = config.get("blockchain.network");

const defaultProvider = getDefaultProvider(NETWORK);

const roContract = new Contract(TOKEN_ADDRESS, TOKEN_ABI, defaultProvider);

const isValidAddress = (addr) => {
  try {
    utils.getAddress(addr);
    return true;
  } catch (error) {
    return false;
  }
};

const getLatestBlockNumber = () => {
  return defaultProvider.getBlockNumber();
};

const balanceOf = (address) => roContract.balanceOf(address);

module.exports = {
  defaultProvider,
  roContract,
  balanceOf,
  isValidAddress,
  getLatestBlockNumber,
};
