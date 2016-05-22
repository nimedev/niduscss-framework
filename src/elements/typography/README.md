# niduscss-elements-typography
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-elements-typography.svg
[npm-url]: https://npmjs.org/package/niduscss-elements-typography

> Default style used in elements related with text for niduscss framework.

## Installation

```console
$ npm install niduscss-elements-typography
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --Link-fs-xxsmall: 0.625rem;
  --Link-fs-xsmall: 0.75rem;
  --Link-fs-small: 0.875rem;
  --Link-fs-normal: 1rem;
  --Link-fs-medium: 1.25rem;
  --Link-fs-big: 1.5rem;
  --Link-fs-huge: 2.125rem;
  --Link-fs-extreme: 2.8125rem;
  --Link-fs-xextreme: 3.5rem;
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
@import "niduscss-elements-typography";

/* Other styles */
```

## [Changelog](CHANGELOG.md)