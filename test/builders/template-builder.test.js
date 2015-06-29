'use strict';

/* global describe, it, context */
var assert = require('assert');
var TemplateBuilder = require('../../src/builders/template-builder');

describe('template builder', function() {
    before(function() {
        TemplateBuilder = new TemplateBuilder(
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

    context('#getPropertyString()', function() {
        it('should hold the property string', function() {
            assert.equal(
                TemplateBuilder.getRenderedTemplate(),
                '<div class="wrapper">loads of html content for you</div>'
            );
        });
    });
});
