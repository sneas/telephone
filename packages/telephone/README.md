# @sneas/telephone - Web Component

<img src="docs/logo.svg" alt="Telephone" height="60">

[![version](https://img.shields.io/npm/v/@sneas/telephone.svg?style=flat-square)](http://npm.im/@sneas/telephone)
[![](https://img.shields.io/jsdelivr/npm/hm/@sneas/telephone?style=flat-square&color=blue&label=jsDelivr)](https://www.jsdelivr.com/package/npm/@sneas/telephone)

Wrap any HTML/CSS/JS code with the

`<iphone-16-max></iphone-16-max>` or

`<pixel-9-pro></pixel-9-pro>` or

`<ipad-air-13></ipad-air-13>` or

`<android-tablet></android-tablet>`

and it will be rendered inside an SVG device frame.

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
<script
  defer
  src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/ipad-air-13.js"
></script>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/android-tablet.js"
></script>

<iphone-16-max mode="light">
  iPhone content goes here.
  Set the mode="light" for the dark text in the status bar.
</iphone-16-max>

<pixel-9-pro mode="dark">
  Pixel content goes here.
  Set mode="dark" for the white text in the status bar.
</pixel-9-pro>

<ipad-air-13 mode="light">
  iPad Air 13" content goes here.
</ipad-air-13>

<android-tablet mode="light">
  Android tablet content goes here.
</android-tablet>
```
