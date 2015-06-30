Mini template engine.
===========
![Travis](https://travis-ci.org/bjarneo/mini-template-engine.svg?branch=master) 
[![Code Climate](https://codeclimate.com/github/bjarneo/mini-template-engine/badges/gpa.svg)](https://codeclimate.com/github/bjarneo/mini-template-engine)
<br />

This is a small easy template engine. It just replaces variable placeholders with objects passed to the function.

### Install
```javascript
npm install --save mini-template-engine
```

### Syntax
```javascript
var template = require('mini-template-engine');
template(
    'string with {placeholder}',
    { placeholder: 'to be replaced' },
    function asyncCallback(data, error) {} // Optional. If not used it'll be blocking.
);
```


### Usage
```javascript
var template = require('mini-template-engine');

var html = template(
    '<div class="{className}">{content}</div>',
    {
        className: 'wrapper',
        content: 'So this is some not so useful content'
    }
);

console.log(html);

// Template should now contain this html string:
// '<div class="wrapper">So this is some not so useful content</div>'


// Async approach
var async = template(
    '<span>{async}</span>',
    { async: 'loaded async' },
    function(template, err) {
        if (err) {
            console.log(err);
        }

        console.log(template);
    }
);

// Output: <span>loaded async</span>


// You can also use the "template" for other stuff than html also
var otherStuff = template(
    'I want to add a word dynamic: {word}',
    {
        word: 'JavaScript'
    }
);

console.log(otherStuff);

// Output:
// 'I want to add a word dynamic: JavaScript'

var nested = template(
    '<div class="{className}">{nested.content}</div>',
    {
        className: 'wrapper',
        nested: {
            content: 'So this is some not so useful content'
        }
    }
);

console.log(nested);

// Template should now contain this html string:
// '<div class="wrapper">So this is some not so useful content</div>'

```
