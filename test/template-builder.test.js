'use strict';

/* global describe, it, context */
var assert = require('assert');
var templateBuilder = require('../src/template-builder');

describe('template builder', function() {
    before(function() {
        templateBuilder = new templateBuilder(
            '<div class="{className}">{content.that.we.want}</div>',
            {
                className: 'wrapper',
                content: {
                    that: {
                        we: {
                            want: 'loads of html content for you'
                        }
                    }
                }
            }
        );
    });

    context('#getString()', function() {
        it('should hold the finished output string', function() {
            assert.equal(
                templateBuilder.getString(),
                '<div class="wrapper">loads of html content for you</div>'
            );
        });
    });

    context('#buildString()', function() {
        it('should build the output string', function() {
            templateBuilder.setString('{replace}');

            templateBuilder.buildPropertyString('replace');

            templateBuilder.buildString('my value');

            assert.equal(
                templateBuilder.getString(),
                'my value'
            );
        });
    });

    context('#setString()', function() {
        it('should set the string', function() {
            templateBuilder.setString('my string');

            assert.equal(
                templateBuilder.str,
                'my string'
            );
        });
    });

    context('#getPropertyString()', function() {
        it('should hold the property string', function() {
            templateBuilder.buildPropertyString('test');
            templateBuilder.buildPropertyString('property');

            assert.equal(
                templateBuilder.getPropertyString(),
                'test.property'
            );
        });
    });

    context('#emptyPropertyString()', function() {
        it('should empty the string', function() {
            templateBuilder.str = 'test';
            templateBuilder.emptyPropertyString();

            assert.equal(
                templateBuilder.getPropertyString(),
                ''
            );
        });
    });

    context('#buildPropertyString()', function() {
        it('should build the property string', function() {
            templateBuilder.buildPropertyString('test');
            templateBuilder.buildPropertyString('property');

            assert.equal(
                templateBuilder.getPropertyString(),
                'test.property'
            );
        });
    });
});
