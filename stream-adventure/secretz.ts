'use strict';

(function() {

  const tar = require('tar');
  const zlib = require('zlib');
  const crypto = require('crypto');
  const through = require('through');

  const cipherName = process.argv[2];
  const cipherPasspharse = process.argv[3];

  const parser = tar.Parse();
  const gunzip = zlib.createGunzip();

  const decrypt = crypto.createDecipher(cipherName, cipherPasspharse);

  parser.on('entry', (entry) => {
    if (entry.type !== 'File') {
      return;
    }

    let hasher = crypto.createHash('md5');

    entry.pipe(hasher).pipe(through(function write(buff, _, next) {
      let hash = buff.toString('hex');
      let name = entry.path;

      process.stdout.write(hash + ' ' + name + '\n');
    }));
  });

  process.stdin.pipe(decrypt).pipe(gunzip).pipe(parser);

}());