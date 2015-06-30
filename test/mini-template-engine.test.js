'use strict';

/* global describe, it */
var assert = require('assert'),
    template = require('../src/mini-template-engine');

describe('mini template engine', function() {
    it('should replace the placeholder variables with the properties', function() {
        assert.equal(
            template(
                '<div class="{className}">{content}</div>',
                {
                    className: 'test',
                    content: 'loads of html content for you'
                }
            ),
            '<div class="test">loads of html content for you</div>'
        );
    });

    it('should be able to use callback and return the template async', function() {
        template(
            '<div class="{className}">{content}</div>',
            {
                className: 'test',
                content: 'loads of html content for you'
            },
            assertionCallback
        );

        function assertionCallback(template) {
            assert.equal(
                template,
                '<div class="test">loads of html content for you</div>'
            );
        }
    });

    it('should replace the placeholder variables with the properties as functions', function() {
        assert.equal(
            template(
                '<div class="{className}">{content}</div>',
                {
                    className: function() {
                        return 'test';
                    },

                    content: function() {
                        return 'loads of html content for you';
                    }
                }
            ),
            '<div class="test">loads of html content for you</div>'
        );
    });

    it('should work with nested objects', function() {
        assert.equal(
            template(
                '<div class="{className.name}">{content.that.we.want}</div>',
                {
                    className: {
                        name: 'wrapper'
                    },
                    content: {
                        that: {
                            we: {
                                want: 'loads of html content for you'
                            }
                        }
                    }
                }
            ),
            '<div class="wrapper">loads of html content for you</div>'
        );
    });

    it('should return the string with placeholders if there are no properties', function() {
        assert.equal(
            template('<div class="{className}">{content}</div>'),
            '<div class="{className}">{content}</div>'
        );
    });

    it('should return the string with placeholders if there are wrong properties', function() {
        assert.equal(
            template(
                '<div class="{className}">{content}</div>',
                {
                    test: 'text'
                }
            ),
            '<div class="{className}">{content}</div>'
        );
    });
});
