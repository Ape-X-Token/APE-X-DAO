"use strict";
const { Model, DataTypes } = require("sequelize");

const config = require("config");
const { BigNumber } = require("ethers");
const { balanceOf } = require("../utils/blockchain");
const BLACKLISTED_ADDRESSES = config.get("blockchain.blacklisted");
const DECIMALS = config.get("blockchain.apex.decimals");

const APEX_PER_VOTE = BigNumber.from(1).mul(DECIMALS);
const MIN_PROPOSAL_BALANCE = BigNumber.from(10000000000).mul(DECIMALS); // 10,000,000,000 APE-X

module.exports = {
  APEX_PER_VOTE,
  MIN_PROPOSAL_BALANCE,
  model: (sequelize) => {
    class User extends Model {
      async canVote() {
        return this.delegatee === null && !(await this.getVotes()).isZero();
      }

      async canPropose() {
        return (await this.getBalance()).gte(MIN_PROPOSAL_BALANCE);
      }

      async getVotes() {
        if (this.delegatee === null)
          return (await this.getBalance()).div(APEX_PER_VOTE);
        return BigNumber.from(0);
      }

      isBlacklisted() {
        return BLACKLISTED_ADDRESSES.includes(this.address.toLowerCase());
      }

      getBalance() {
        return balanceOf(this.address);
      }
    }

    User.init(
      {
        address: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        delegatee: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
      },
      { sequelize, modelName: "users" }
    );

    return User;
  },
};
