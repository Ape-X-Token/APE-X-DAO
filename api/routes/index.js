"use strict";

const { request } = require('express');
const jwt = require('jsonwebtoken');
const jwtauth = require('../middleware/jwtauth');
const { isValidAddress } = require("../utils/blockchain");
const accessTokenSecret = process.env.JWT_SECRET;
const usersRepository = require("../repositories/users");
const { sequelize } = require("../models");

module.exports = (app, logger) => {
  app.get('/login', (req, res, next) => {
    var address = req.query.address.trim().toLowerCase();
    if (!isValidAddress(address)) {
      next(createError(400, "Invalid address"));
      return;
    }
    // const t = await sequelize.transaction();
    // let user = await usersRepository.findByAddress(address, t, true);
    // if (!user) {
    //   console.log('create user');
    //   user = await usersRepository.save({ address: address }, t);
    // }
    // await t.commit();
    // console.log(user);

    var token = jwt.sign({ address: address }, accessTokenSecret);
    res.json({ token, address });
  });

  app.use("/proposals", jwtauth, require("./proposals"));

  // error handler
  app.use(function (err, req, res, next) {
    if (!err.status || err.status >= 500) {
      logger.error("unhandled error occured: %O", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      logger.warn(err.message);
      res.status(err.status).json({ message: err.message });
    }
  });
};
