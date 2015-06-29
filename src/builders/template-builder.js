'use strict';

var isObject = require('is-object');
var PropertyBuilder = require('./property-builder');
var StringBuilder = require('./string-builder');


function TemplateBuilder(str, props) {
    this.StringBuilder = new StringBuilder(str);
    this.PropertyBuilder = new PropertyBuilder();

    this.render(props);
}

TemplateBuilder.prototype.render = function(props) {
    for (var prop in props) {
        if (!props.hasOwnProperty(prop)) {
            continue;
        }

        this.PropertyBuilder.buildPropertyString(prop);

        if (isObject(props[prop])) {
            this.render(props[prop]);
        } else {
            this.StringBuilder.buildString(
                props[prop],
                this.PropertyBuilder.getPropertyString()
            );

            this.PropertyBuilder.emptyPropertyString();
        }
    }
};

TemplateBuilder.prototype.getRenderedTemplate = function() {
    return this.StringBuilder.getString();
};


module.exports = TemplateBuilder;
