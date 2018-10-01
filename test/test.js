'use strict';

const fs     = require('fs');
const path   = require('path');
const assert = require('assert');
const expect = require('chai').expect;

const I18n = require('..');

describe('I18n.getLang and I18n.setLang', () => {
  const i18n = new I18n(path.resolve(__dirname, 'i18n'));
  it('should be fine', () => {
    i18n.setLang('en');
    expect(i18n.getLang()).to.equal('en');
    i18n.setLang('es');
    expect(i18n.getLang()).to.equal('es');
  });
});

describe('I18n.get', () => {

  const i18n = new I18n(path.resolve(__dirname, 'i18n'));

  const sectionWords = require(path.resolve(__dirname, 'i18n', 'section', 'words'));

  it('getting exiting key', () => {

    i18n.setLang('en');
    expect(i18n.get('section.words.hello_world')).to.equal(sectionWords.hello_world.en);
    i18n.setLang('es');
    expect(i18n.get('section.words.hello_world')).to.equal(sectionWords.hello_world.es);

  });

  it('getting non exiting key', () => {

    const key = 'section.words.no_existe_key';
    
    i18n.setLang('en');
    expect(i18n.get(key)).to.equal(key);
    
  });

  it('getting non exiting file', () => {

    const key = 'section_no_existin.words.no_existe_key';
    
    i18n.setLang('en');

    try {
      i18n.get(key);
      assert(false, 'a error should be throwed');
    }catch(err) {
      expect(err.code).to.equal('MODULE_NOT_FOUND');
    }
    
  });

});