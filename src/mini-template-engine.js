'use strict';

var isString = require('is-string');
var isObject = require('is-object');
var TemplateBuilder = require('./template-builder');


/**
 * This is a small easy template engine.
 * It just replaces variable placeholders with objects passed to the function.
 * @param {string} the string with placeholders
 * @param {object} the properties to replace the placeholders
 * @throws {Error} Throws an error if the first parameter is not a string
 * @returns {string}
 */
function miniTemplateEngine(str, props) {
    if (!str) {
        return '';
    }

    if (!isString(str)) {
        throw new Error('The first parameter needs to be a string');
    }

    if (!props || !isObject(props)) {
        props = {};
    }

    var template = new TemplateBuilder(str, props);

    return template.getString();
}

module.exports = miniTemplateEngine;
