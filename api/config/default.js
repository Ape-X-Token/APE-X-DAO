"use strict";

module.exports = {
  port: 3000,
  logging: {
    level: "info",
    folder: ".//logs//",
    file: "app-%DATE%.log",
    rotation: "7d", // rotate weekly
  },
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    pool: {
      max: 60,
      min: 10,
      acquire: 30000,
      idle: 10000,
    },
    logs: false, // SQL logs
  },
  blockchain: {
    network: "https://api.avax.network/ext/bc/C/rpc",
    blacklisted: [].map((a) => a.toLowerCase()), // blacklisted addresses
    apex: {
      address: "0xd039C9079ca7F2a87D632A9C0d7cEa0137bAcFB5",
      decimals: 9,
      abi: require("./APEX.json"),
    },
  },
};
