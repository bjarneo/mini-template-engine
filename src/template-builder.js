'use strict';

var isObject = require('is-object');


function TemplateBuilder(str, props) {
    this.str = str;
    this.propertyString = [];

    this.buildTemplate(props);
}

TemplateBuilder.prototype.buildTemplate = function(props) {
    for (var prop in props) {
        if (!props.hasOwnProperty(prop)) {
            continue;
        }

        this.buildPropertyString(prop);

        if (isObject(props[prop])) {
            this.buildTemplate(props[prop]);
        } else {
            this.buildString(props[prop]);
        }
    }
};

TemplateBuilder.prototype.getString = function() {
    return this.str;
};

TemplateBuilder.prototype.setString = function(value) {
    this.str = value;
};

TemplateBuilder.prototype.buildString = function(value) {
    this.setString(
        this.getString().replace(
            new RegExp('{' + this.getPropertyString() + '}', 'g'),
            value
        )
    );

    this.emptyPropertyString();
};

TemplateBuilder.prototype.getPropertyString = function() {
    return this.propertyString.join('.');
};

TemplateBuilder.prototype.buildPropertyString = function(value) {
    this.propertyString.push(value.toString());
};

TemplateBuilder.prototype.emptyPropertyString = function() {
    this.propertyString = [];
};


module.exports = TemplateBuilder;
