if(!window.Intl){
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}

const IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat'),
        IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');


let rf = new IntlRelativeFormat('es');
let es = require('./es');
let en = require('./en-US');

let MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

let locale = localStorage.locale || 'es';

module.exports = {
    message: function (text, opts) {
        opts = opts || {};
        let msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
        return msg.format(opts)
    },
    date: new IntlRelativeFormat(locale)
}
