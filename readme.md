# vanilla-autogrow

[![NPM](https://nodei.co/npm/vanilla-autogrow.png?mini=true)](https://nodei.co/npm/vanilla-autogrow/) 
[![Downloads](https://img.shields.io/npm/dt/vanilla-autogrow.svg)](https://www.npmjs.com/package/vanilla-autogrow)

## How to use

A dead simple approach to autogrowing your textareas.

Works beautifully with Bootstrap 5 and even works with the floating labels.

No jQuery or framework needed.

```js
import Autogrow from "./autogrow.js";
var inst = new Autogrow();

// or pass a selector
var inst = new Autogrow('textarea.autogrow');
```