'use strict';
const { StatusCodes } = require('http-status-codes');
const contentTypes = require('./contentTypes');
const utils = require('./utils');

const routes = {
  GET: {},
  POST: {},
};

exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(StatusCodes.OK, contentTypes.html);
    utils.getFile('views/error.html', res);
  }
};

exports.get = (url, action) => {
  routes['GET'][url] = action;
};

exports.post = (url, action) => {
  routes['POST'][url] = action;
};
