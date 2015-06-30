'use strict';

var isString = require('is-string');
var isObject = require('is-object');
var isFunction = require('is-function');
var TemplateBuilder = require('./builders/template-builder');


/**
 * This is a small easy template engine.
 * It just replaces variable placeholders with objects passed to the function.
 * @param {string} the string with placeholders
 * @param {object} the properties to replace the placeholders
 * @throws {Error} Throws an error if the first parameter is not a string
 * @returns {string}
 */
function miniTemplateEngine(str, props, callback) {
    var isCallback = false,
        errorString = 'The first parameter needs to be a string';

    if (callback && isFunction(callback)) {
        isCallback = true;
    }

    if (!str) {
        return '';
    } else if (!isString(str) && !isCallback) {
        throw new Error(errorString);
    } else if (!isString(str) && isCallback) {
        callback(null, errorString);
    }

    if (!props || !isObject(props)) {
        props = {};
    }

    if (isCallback) {
        setTimeout(function() {
            return callback(
                new TemplateBuilder(str, props)
                    .getRenderedTemplate()
            );
        }, 1);
    } else {
        return new TemplateBuilder(str, props)
            .getRenderedTemplate();
    }
}


module.exports = miniTemplateEngine;
