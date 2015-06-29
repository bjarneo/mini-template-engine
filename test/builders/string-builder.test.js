'use strict';

/* global describe, it, context */
var assert = require('assert');
var StringBuilder = require('../../src/builders/string-builder');

describe('string builder', function() {
    before(function() {
        StringBuilder = new StringBuilder();
    });

    context('#setString()', function() {
        it('should set the string with placeholders', function() {
            StringBuilder.setString('<div class="{className}">{content}</div>');

            assert.equal(
                StringBuilder.getString(),
                '<div class="{className}">{content}</div>'
            );
        });
    });

    context('#buildString()', function() {
        it('should build and replace the placeholders in the string', function() {
            StringBuilder.buildString('my content', 'content');
            StringBuilder.buildString('myClass', 'className');

            assert.equal(
                StringBuilder.getString(),
                '<div class="myClass">my content</div>'
            );
        });
    });

    context('#getString()', function() {
        it('should hold the finished output string', function() {
            assert.equal(
                StringBuilder.getString(),
                '<div class="myClass">my content</div>'
            );
        });
    });
});
