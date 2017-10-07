<img src="http://bitcore.io/css/images/module-message.png" alt="unitedcore message" height="35">
# Unitedcoin Message Verification and Signing for Unitedcore


[![NPM Package](https://img.shields.io/npm/v/unitedcore-message.svg?style=flat-square)](https://www.npmjs.org/package/unitedcore-message)
[![Build Status](https://img.shields.io/travis/unitedcoin-project/unitedcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/unitedcoin-project/unitedcore-message)
[![Coverage Status](https://img.shields.io/coveralls/unitedcoin-project/unitedcore-message.svg?style=flat-square)](https://coveralls.io/r/unitedcoin-project/unitedcore-message?branch=master)

unitedcore-message adds support for verifying and signing unitedcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main unitedcore repo](https://github.com/unitedcoin-project/unitedcore) for more information.

## Getting Started

```sh
npm install unitedcore-message
```

```sh
bower install unitedcore-message
```

To sign a message:

```javascript
var unitedcore = require('unitedcore-lib');
var Message = require('unitedcore-message');

var privateKey = unitedcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/unitedcoin-project/unitedcore/blob/master/CONTRIBUTING.md) on the main unitedcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/unitedcoin-project/unitedcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Unitedcoin Core Developers

