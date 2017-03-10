# niduscss-base
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-base.svg
[npm-url]: https://npmjs.org/package/niduscss-base

> Base css styles that provides a normalize and starting point.

## Installation

```console
$ npm install niduscss-base
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --App-background: #f5f5f5;
  --App-textcolor: #262626;
  --App-basefont: Lato, Helvetica, "Roboto Slab", "Droid Serif", "Segoe UI Bold", sans-serif;
}
```

Import styles:

styles.css:

```css
/* Import first de file with custom properties or declare before import the
   component.
   ========================================================================== */
   
@import "settings";

/* Base styles
   ========================================================================== */
@import "niduscss-base";

/* Other styles */
```

## [Changelog](CHANGELOG.md)