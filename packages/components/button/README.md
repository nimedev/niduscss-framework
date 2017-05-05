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
  --Button-borderRadius: 0;
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

<!-- Disabled Button -->
<button class="Button Button--disabled">Button</button>

<!-- Button containing multiple elements aligned vertically -->
<button class="Button Button--combined">
  <svg class="Button-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
  <span class="Button-label">Label</span>
</button>

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
