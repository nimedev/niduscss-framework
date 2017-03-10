# niduscss-material-icons
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-material-icons.svg
[npm-url]: https://npmjs.org/package/niduscss-material-icons

> Material design icons for niduscss framework.


## Installation

```console
$ npm install niduscss-material-icons
```


## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --MaterialIcon-src: local("Material Icons"), local("MaterialIcons-Regular"), url("https://fonts.gstatic.com/s/materialicons/v16/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2") format("woff2");
  --MaterialIcon-error-color: #e57373;
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
@import "niduscss-material-icons";

/* Other styles */
```

Use in html files

```html
<!-- Icon element -->
<div class="MaterialIcon">menu</div>

<!-- Material icon using icon button component -->
<div class="IconButton MaterialIcon">menu</div>

<!-- Big error icon -->
<div class="MaterialIcon MaterialIcon--big MaterialIcon--error">warning</div>

<!-- Lighten icon -->
<div class="MaterialIcon MaterialIcon--lighten">save</div>
```


## [Changelog](CHANGELOG.md)
