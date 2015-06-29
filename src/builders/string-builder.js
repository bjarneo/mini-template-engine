'use strict';

function StringBuilder(str) {
    this.str = str;
}

StringBuilder.prototype.getString = function() {
    return this.str;
};

StringBuilder.prototype.setString = function(value) {
    this.str = value;
};

StringBuilder.prototype.buildString = function(value, propertyString) {
    this.setString(
        this.getString().replace(
            new RegExp('{' + propertyString + '}', 'g'),
            value
        )
    );
};


module.exports = StringBuilder;
