# niduscss-elements-form
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-elements-form.svg
[npm-url]: https://npmjs.org/package/niduscss-elements-form

> Default style used in input elements and forms for niduscss framework.

## Installation

```console
$ npm install niduscss-elements-form
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --Form-textcolor: #262626;
  --Form-basefont: Lato, Helvetica, "Roboto Slab", "Droid Serif", "Segoe UI Bold", sans-serif;
  --Form-fs-small: 0.875rem;
  --Form-fs-normal: 1rem;
  --Form-border-clr: #2196f3;
}
```

Import styles:

styles.css:

```css
/* Import first de file with custom properties or declare before import the
   component.
   ========================================================================== */
   
@import "settings";

/* Elements
   ========================================================================== */
@import "niduscss-elements-form";

/* Other styles */
```

## [Changelog](CHANGELOG.md)