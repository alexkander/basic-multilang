'use strict';

const path   = require('path');
const reload = require('require-reload')(require);

class I18n {
  
  constructor(directory) {
    this._directory = directory;
  }

  get (key, lang) {
    const keyparts = key.split('.');
    const keyname = keyparts.pop();
    const params = [this._directory].concat(keyparts)
    const filepath = path.resolve.apply(path, params) + '.json';
    return (reload(filepath)[keyname]||{})[lang||this._lang] || key;
  }

  getLang (lang) {
    return this._lang;
  }

  setLang (lang) {
    this._lang = lang;
  }

}

module.exports = I18n;