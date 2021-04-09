const fs = require("fs");

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    throw err;
  });
};

exports.deleteFile = deleteFile;
