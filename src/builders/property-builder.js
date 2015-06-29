'use strict';

function PropertyBuilder() {
    this.propertyString = [];
}

PropertyBuilder.prototype.getPropertyString = function() {
    return this.propertyString.join('.');
};

PropertyBuilder.prototype.buildPropertyString = function(value) {
    this.propertyString.push(value.toString());
};

PropertyBuilder.prototype.emptyPropertyString = function() {
    this.propertyString = [];
};


module.exports = PropertyBuilder;



