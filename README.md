Mini template engine.
===========
![Travis](https://travis-ci.org/bjarneo/mini-template-engine.svg?branch=master) <br />

This is a small easy template engine. It just replaces variable placeholders with objects passed to the function.

###Install
```javascript
npm install --save mini-template-engine
```

###Usage
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

```
