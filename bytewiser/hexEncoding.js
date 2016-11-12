(function() {

  const args = [].slice.call(process.argv).slice(2);

  console.log(Buffer.from(args, 'hex').toString('hex'));

}());