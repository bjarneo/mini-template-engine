'use strict';

var TemplateBuilder = require('./template-builder');

/**
 * This is a small easy template engine.
 * It just replaces variable placeholders with objects passed to the function.
 * @param {string} the string with placeholders
 * @param {object} the properties to replace the placeholders
 * @returns {string}
 */
function miniTemplateEngine(str, props) {
    if (!str) {
        return '';
    }

    if (!props) {
        props = {};
    }

    var template = new TemplateBuilder(str, props);

    return template.getString();
}

module.exports = miniTemplateEngine;
