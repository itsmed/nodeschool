(function() {

  let buffers = [];

  process.stdin.on('data', data => {
    buffers.push(data);
  });

  process.stdin.on('end', () => {
    console.log(Buffer.concat(buffers))
  });

}());