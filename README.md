basic-multilang
===============

[![npm version](https://badge.fury.io/js/basic-multilang.svg)](https://badge.fury.io/js/basic-multilang) [![Build Status](https://travis-ci.org/arondn2/basic-multilang.svg?branch=master)](https://travis-ci.org/arondn2/basic-multilang)
[![Coverage Status](https://coveralls.io/repos/github/arondn2/basic-multilang/badge.svg?branch=master)](https://coveralls.io/github/arondn2/basic-multilang?branch=master)

Basic implemetation of multilang support for NodeJS.

## Installation

`npm install basic-multilang --save`

## Usage

#### Include
```js
var I18n = require('basic-multilang');
```

#### `new I18n(directory, reload = null)`;

Create a instance to render I18n.

##### Arguments
 Name        | Type       | Description
-------------|------------|-------------
 `directory` | `string`   | Translations directory.
 `reload`    | `function` | Funcion to load files. If `!reload` then will be used `require`.

##### Example
```js
// Option 1
var i18n = new I18n(path.resolve(__dirname, 'i18n'));
// Option 2
var reload = require('require-reload')(require);
var i18n = new I18n(path.resolve(__dirname, 'i18n'), reload);
```

#### `i81n.setLang(lang)`;

Set language to use.

##### Arguments
 Name   | Type     | Description
--------|----------|-------------
 `lang` | `string` | Language to set. This will be key to get el translation.

##### Example
```js
i18n.setLang('es');
```

#### `i81n.getLang()`;

Return then language to seted.

```js
const lang = i18n.getLang();
```

#### `i81n.get(key)`;

Return the translation for a specific key.

##### Arguments
 Name  | Type     | Description
-------|----------|-------------
 `key` | `string` | Key to get translation.

```js
var i18n = new I18n(path.resolve(__dirname, 'i18n'));
i18n.setLang('es');
const translation = i18n.get('mysubdirectory.myfile.myphrasekey');
// in file ./i18n/mysubdirectory/myfile.js[on], get poperty myphrasekey.es.
```

## Troubles

If you have any kind of trouble with it, just let me now by raising an issue on the GitHub issue tracker here:

https://github.com/arondn2/basic-multilang/issues

Also, you can report the orthographic errors in the READMEs files or comments. Sorry for that, English is not my main language.

## Tests

`npm test` or `npm run cover`
