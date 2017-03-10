# niduscss-material-fab
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-material-fab.svg
[npm-url]: https://npmjs.org/package/niduscss-material-fab

> Material design style used in FAB buttons for niduscss framework.

## Installation

```console
$ npm install niduscss-material-fab
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --FabButton-z-index: 8000;
  --FabButton-background: #ff7043;
  --FabButton-color: #fff;
}
```

Import styles:

styles.css:

```css
/* Import first de file with custom properties or declare before import the
   component.
   ========================================================================== */
   
@import "settings";

/* Material components
   ========================================================================== */
@import "niduscss-material-fab";

/* Other styles */
```

Use in html files

```html
<!-- Button usign material icons module -->
<button class="FabButton">
  <span class="FabButton-icon MaterialIcon">save</span>
</button>
```

## [Changelog](CHANGELOG.md)