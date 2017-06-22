/*
 * Author: Daisuke Takayama
 */
'use strict';
let e = eval, global: NodeJS.Global = e('this');

import Dropdown from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      dropdown: Dropdown
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = Dropdown;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }

  if (typeof global.AP.dropdown === 'undefined') {
    Object.assign(global.AP, { dropdown: new Dropdown });
  }
}
