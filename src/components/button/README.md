# niduscss-components-button
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-components-button.svg
[npm-url]: https://npmjs.org/package/niduscss-components-button

> Button CSS styles for niduscss framework.

## Installation

```console
$ npm install niduscss-components-button
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --Button-background: #ff7043;
  --Button-color: #fff;
  --Button-font-size: 1rem;
  --Button-fs-xsmall: var(--App-fs-xsmall);
  --Button-fs-small: var(--App-fs-small);
  --Button-fs-huge: var(--App-fs-huge);
  --Button-fs-extreme: var(--App-fs-extreme);
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
@import "niduscss-components-button";

/* Other styles */
```

Use in html files

```html
<!-- Normal Button -->
<div class="Button">Button</div>

<!-- Mini Button -->
<div class="Button Button--mini">Mini</div>

<!-- Small Button -->
<div class="Button Button--small">Small</div>

<!-- Huge Button -->
<div class="Button Button--huge">Huge</div>

<!-- Extreme Button -->
<div class="Button Button--extreme">Extreme</div>
```

## [Changelog](CHANGELOG.md)