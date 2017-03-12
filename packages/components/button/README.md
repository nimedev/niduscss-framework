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
<button class="Button">Button</button>

<!-- Link Button -->
<a class="Button">Link Button</a>

<!-- Mini Button -->
<button class="Button Button--mini">Mini</button>

<!-- Small Button -->
<button class="Button Button--small">Small</button>

<!-- Huge Button -->
<button class="Button Button--huge">Huge</button>

<!-- Extreme Button -->
<button class="Button Button--extreme">Extreme</button>
```


## [Changelog](CHANGELOG.md)
