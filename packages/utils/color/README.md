# niduscss-utils-color
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-color.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-color

> Color utilies for niduscss framework.

## Installation

```console
$ npm install niduscss-utils-color
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
/* You can import material colors from niduscss framework */

@import "niduscss-material-colors";

:root {
  --App-primary-df: var(--Material-indigo-500);
  --App-primary-h1: var(--Material-indigo-300);
  --App-primary-h2: var(--Material-indigo-800);
  --App-primary-h3: var(--Material-indigo-50);
  --App-accent-df: var(--Material-deep-orange-A400);
  --App-accent-h1: var(--Material-deep-orange-A100);
  --App-accent-h2: var(--Material-deep-orange-A200);
  --App-accent-h3: var(--Material-deep-orange-A700);
  --App-warn-df: var(--Material-red-500);
  --App-warn-h1: var(--Material-red-300);
  --App-warn-h2: var(--Material-red-800);
  --App-warn-h3: var(--Material-red-A100);
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
@import "niduscss-utils-color";

/* Other styles */
```

Use in html files

```html
<!-- Set the color of the heading -->
<h3 class="u-primaryColor-df">H3 heading</h3>

<!-- Set the background color of a button -->
<button class="u-accentBackground-h1">Button</button>
```

## [Changelog](CHANGELOG.md)