const fs = require('fs');

module.exports = function readArchive(type, value1, value2, cb) {
    // fs.readdir(`../../archive_data/${type}`, (err, files) => {
    //   if (err) throw err;
    console.log('in MODULE');

      fs.readFile(`./archive_data/${type}/${value1}_${value2}.json`, { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;
        let newData = JSON.parse(data);
        cb(newData);
      });
};

