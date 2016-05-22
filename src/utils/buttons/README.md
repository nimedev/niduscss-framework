# niduscss-utils-buttons
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-buttons.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-buttons

> Buttons utilies for niduscss framework.

## Installation

```console
$ npm install niduscss-utils-buttons
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --u-Buttons-fs-medium: 1.25rem;
}
```

Import styles:

styles.css:

```css
/* Import first de file with custom properties or declare before import the
   component.
   ========================================================================== */
   
@import "settings";

/* Utilities
   ========================================================================== */
@import "niduscss-utils-buttons";

/* Other styles */
```

Use in html files

```html
<!-- This example use material icon and icon button components -->
<div class="u-labelButtonGroup">
  <h3 class="u-labelButtonGroup-label">Group label</h3>
  <div class="IconButton MaterialIcon u-labelButtonGroup-btn">save</div>
</div>
```

## [Changelog](CHANGELOG.md)