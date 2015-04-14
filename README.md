# eslint-one-var-es6 [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Custom eslint rule for one-var that adds es6 compat

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S eslint-one-var-es6
```


## Usage

```js
// .eslintrc

"plugins": [
  "eslint-one-var-es6"
],
"rules": {
    "eslint-one-var-es6/one-var-es6": [2, "always"],
    "eslint-one-var-es6/one-let": [2, "never"],
    "eslint-one-var-es6/one-const": [2, "never"]
}

```

## Tests
Tests are run with [eslint-tester](https://github.com/eslint/eslint-tester).

* `npm test` will run the tests
* `npm run tdd` will run the tests on every file change.

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](https://byjoeybaker.com)


[npm-url]: https://npmjs.org/package/eslint-one-var-es6
[npm-image]: https://badge.fury.io/js/eslint-one-var-es6.svg
[travis-url]: https://travis-ci.org/joeybaker/eslint-one-var-es6
[travis-image]: https://travis-ci.org/joeybaker/eslint-one-var-es6.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/eslint-one-var-es6.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/eslint-one-var-es6
