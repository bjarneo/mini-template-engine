'use strict';


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

    for (var prop in props) {
        if (!props.hasOwnProperty(prop)) {
            continue;
        }

        str = str.replace(
            new RegExp('{' + prop + '}', 'g'),
            props[prop]
        );
    }

    return str;
}

module.exports = miniTemplateEngine;