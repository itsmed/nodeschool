'use strict';
(function () {
    var tar = require('tar');
    var zlib = require('zlib');
    var crypto = require('crypto');
    var through = require('through');
    var cipherName = process.argv[2];
    var cipherPasspharse = process.argv[3];
    var parser = tar.Parse();
    var gunzip = zlib.createGunzip();
    var decrypt = crypto.createDecipher(cipherName, cipherPasspharse);
    parser.on('entry', function (entry) {
        if (entry.type !== 'File') {
            return;
        }
        var hasher = crypto.createHash('md5');
        entry.pipe(hasher).pipe(through(function write(buff, _, next) {
            var hash = buff.toString('hex');
            var name = entry.path;
            process.stdout.write(hash + ' ' + name + '\n');
        }));
    });
    process.stdin.pipe(decrypt).pipe(gunzip).pipe(parser);
}());
