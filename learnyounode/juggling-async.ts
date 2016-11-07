'use strict';

(function() {
  const http = require('http');

  const urlOne = process.argv[2];
  const urlTwo = process.argv[3];
  const urlThree = process.argv[4];

  let dataOne: string = '';
  let dataTwo: string = '';
  let dataThree: string = '';

  interface Flags {
    first: boolean;
    second: boolean;
    third: boolean;
    all?: boolean;
  }

  let flags: Flags = {
    first: false,
    second: false,
    third: false
  };

  const logAll = (): void => {
    console.log(dataOne);
    console.log(dataTwo);
    console.log(dataThree);
  }

  const checkComplete = () => {
    let foundFalse: boolean = false;
    for (let f in flags) {
      if (!flags[f]) {
        foundFalse = true;
      }
    }

    return foundFalse ? null : logAll() ;
  };

  http.get(urlOne, res => {
    res.on('error', console.error);
    res.on('data', data => dataOne += data.toString());
    res.on('end', () => {
      flags.first = true;
      checkComplete();
    });
  });

  http.get(urlTwo, res => {
    res.on('error', console.error);
    res.on('data', data => dataTwo += data.toString());
    res.on('end', () => {
      flags.second = true;
      checkComplete();
    });
  });

  http.get(urlThree, res => {
    res.on('error', console.error);
    res.on('data', data => dataThree += data.toString());
    res.on('end', () => {
      flags.third = true;
      checkComplete();
    });
  });

}());