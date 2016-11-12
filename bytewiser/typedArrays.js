(function() {

  process.stdin.on('data', data => {
    const typedArray = new Uint8Array(data);
    return console.log(JSON.stringify(typedArray));
  });

}());