const CodeBlocks = require("../models/codeBlocksModel");

const getAllCodeBlocks = () => {
  return new Promise((resolve, reject) => {
    CodeBlocks.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getCodeBlocks = (id) => {
  return new Promise((resolve, reject) => {
    CodeBlocks.findById(id, {}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { getAllCodeBlocks, getCodeBlocks };
