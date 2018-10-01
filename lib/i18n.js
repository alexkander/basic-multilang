'use strict';

const path   = require('path');

class I18n {
  
  constructor(directory = '', reload = null) {
    this.reload = reload || require;
    this._directory = directory;
  }

  get (key, lang) {
    const keyparts = key.split('.');
    const keyname = keyparts.pop();
    const params = [this._directory].concat(keyparts)
    const filePath = path.resolve.apply(path, params);
    return (this.reload(filePath)[keyname]||{})[lang||this._lang] || key;
  }

  getLang (lang) {
    return this._lang;
  }

  setLang (lang) {
    this._lang = lang;
  }

}

module.exports = I18n;
