# eslint-one-var-custom [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

custom eslint rule for one-var that adds es6 compat

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
  - [get `(<String> string)`](#get-string-string)
- [Events](#events)
  - [myEvent `(<String> myString)`](#myevent-string-mystring)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S eslint-one-var-custom
```


## Usage

```js
var eslintOneVarCustom = require('eslint-one-var-custom')

eslintOneVarCustom('Rainbow')
```

## Methods
### get `(<String> string)`
Returns the string passed to it.

## Events
### myEvent `(<String> myString)`
Emitted when x happens. Passes `myString` which is a y.

## Tests
Tests are in [tape](https://github.com/substack/tape) and code coverage is run though [covert](https://github.com/substack/covert).

* `npm test` will run both server and browser tests
* `npm run test-browser` and `npm run test-server` run their respective tests
* `npm run tdd-server` will run the server tests on every file change.

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](https://byjoeybaker.com)


[npm-url]: https://npmjs.org/package/eslint-one-var-custom
[npm-image]: https://badge.fury.io/js/eslint-one-var-custom.svg
[travis-url]: https://travis-ci.org/joeybaker/eslint-one-var-custom
[travis-image]: https://travis-ci.org/joeybaker/eslint-one-var-custom.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/eslint-one-var-custom.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/eslint-one-var-custom
