'use strict';
const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const contentTypes = require('./contentTypes');

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (err, data) => {
      if (err) {
        res.writeHead(StatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end('There was an error serving content!');
      }
      res.end(data);
    });
  },
};
