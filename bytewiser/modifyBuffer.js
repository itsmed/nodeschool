(function() {

  process.stdin.on('data', function(buff) {
    for (let i = 0; i < buff.length; i++) {
      if (buff[i] === 46) {
        buff[i] = 33;
      }
    }
    console.log(buff)
  });


}());