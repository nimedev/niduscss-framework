# niduscss-components-icon-button
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-components-icon-button.svg
[npm-url]: https://npmjs.org/package/niduscss-components-icon-button

> Base styles to create icon buttons for niduscss framework.

## Installation

```console
$ npm install niduscss-components-icon-button
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --IconButton-color: #fff;
}
```

Import styles:

styles.css:

```css
/* Import first de file with custom properties or declare before import the
   component.
   ========================================================================== */

@import "settings";

/* Components
   ========================================================================== */
@import "niduscss-components-icon-button";

/* Other styles */
```

Use in html files (angular component)

```html
<div class="IconButton">Menu</div>
```

## [Changelog](CHANGELOG.md)
