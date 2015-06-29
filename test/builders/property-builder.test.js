'use strict';

/* global describe, it, context */
var assert = require('assert');
var PropertyBuilder = require('../../src/builders/property-builder');

describe('property builder', function() {
    before(function() {
        PropertyBuilder = new PropertyBuilder();
    });

    context('#buildPropertyString()', function() {
        it('should build the property string', function() {
            PropertyBuilder.buildPropertyString('test');
            PropertyBuilder.buildPropertyString('property');

            assert.equal(
                PropertyBuilder.getPropertyString(),
                'test.property'
            );
        });
    });

    context('#getPropertyString()', function() {
        it('should hold the property string', function() {
            assert.equal(
                PropertyBuilder.getPropertyString(),
                'test.property'
            );
        });
    });

    context('#emptyPropertyString()', function() {
        it('should empty the property string', function() {
            PropertyBuilder.emptyPropertyString();

            assert.equal(
                PropertyBuilder.getPropertyString(),
                ''
            );
        });
    });
});
