# @sneas/telephone - Web Component

[![version](https://img.shields.io/npm/v/@sneas/telephone.svg?style=flat-square)](http://npm.im/@sneas/telephone)

Wrap any HTML/CSS/JS code with the

`<iphone-16-max></iphone-16-max>` or

`<pixel-9-pro></pixel-9-pro>`

and it will be rendered inside an SVG mobile phone frame.

![Example](docs/example.png)

Demo: https://sneas.github.io/telephone

Real world example: https://vocably.pro

## Installation

```html
<script
  defer
  src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/iphone-16-max.js"
></script>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/pixel-9-pro.js"
></script>

<iphone-16-max mode="light">
  iPhone content goes here.
  Set the mode="light" for the dark text in the status bar.
</iphone-16-max>

<pixel-9-pro mode="dark">
  Pixel content goes here.
  Set mode="dark" for the white text in the status bar.
</pixel-9-pro>
```
