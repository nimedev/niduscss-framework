# niduscss-material-chip
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-material-chip.svg
[npm-url]: https://npmjs.org/package/niduscss-material-chip

> Chip component with material design styles for niduscss framework.

## Installation

```console
$ npm install niduscss-material-chip
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --Chip-font-size: 1rem;
  --Chip-selected: #ff6e40;
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
@import "niduscss-material-chip";

/* Other styles */
```

Use in html files

```html
<!-- Single chip -->
<div class="Chip is-selected">Single Chip</div>

<!-- Group of chips -->
<div class="ChipsGroup">
  <div class="Chip is-selected">Chip 1</div>
  <div class="Chip">Chip 2</div>
  <div class="Chip">Chip 3</div>
</div>
```

## [Changelog](CHANGELOG.md)