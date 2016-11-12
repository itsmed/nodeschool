(function() {

  const fs = require('fs');

  const filePath = process.argv[2];

  fs.readFile(filePath, function(err, buff) {
    if (err) {
      console.warn(err.message);
    }

    for (let prev = 0, current = 0; current < buff.length; current++) {
      if (buff[current] === 10 || current === buff.length - 1) {
        console.log(Buffer.from(buff.slice(prev, current)));
        prev = current + 1;
      }
    }

  })

}());