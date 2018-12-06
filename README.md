# Flatten

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![XO code style][xo-img]][xo]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/flatten-object.svg
[npm]:             https://www.npmjs.com/package/@tadashi/flatten-object
[ci-img]:          https://travis-ci.org/lagden/flatten-object.svg
[ci]:              https://travis-ci.org/lagden/flatten-object
[coveralls-img]:   https://coveralls.io/repos/github/lagden/flatten-object/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/flatten-object?branch=master
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo

-----

Flattens object a single level deep

## Install

```
$ npm i -S @tadashi/flatten-object
```


## Usage

```js
const flatten = require('@tadashi/flatten-object')

const flat = flatten({
  a: {
    b: {
      c: 'foo'
    },
    d: 'bar'
  }
}, '__')
// => {a__b__c: 'foo', a__d: 'bar'}
```


## License

MIT © [Thiago Lagden](http://lagden.in)
