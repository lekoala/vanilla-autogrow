# vanilla-autogrow

[![NPM](https://nodei.co/npm/vanilla-autogrow.png?mini=true)](https://nodei.co/npm/vanilla-autogrow/) 
[![Downloads](https://img.shields.io/npm/dt/vanilla-autogrow.svg)](https://www.npmjs.com/package/vanilla-autogrow)

## How to use

A dead simple approach to autogrowing your textareas.

Works beautifully with Bootstrap 5 and even works with the floating labels.

No jQuery or framework needed.

```js
import Autogrow from "./autogrow.js";
// or import from cdn
// import Autogrow from "https://cdn.jsdelivr.net/npm/vanilla-autogrow@1.0.0/autogrow.min.js";
var inst = new Autogrow();

// or pass a selector
var inst = new Autogrow('textarea.autogrow');
```

## Custom element

```html
<script type="module" src="./autogrow.element.js"></script>
<textarea is="autogrow-textarea" class="form-control"></textarea>
```

## Demo

https://codepen.io/lekoalabe/pen/gOmYaxm

