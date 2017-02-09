# niduscss-libs-mixins
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-libs-mixins.svg
[npm-url]: https://npmjs.org/package/niduscss-libs-mixins

> Common mixins for niduscss framework.


## Installation

```console
$ npm install niduscss-libs-mixins
```


## Usage

### Link mixins
Use the mixin homogenizeLink to homogenize a link element. To change color use a parent element of the link:

```css
@import "niduscss-libs-mixins";

/* Change the color of link */
nav {
  color: salmon;
}

/* Homogenize the link elements inside a nav */
nav a {
  @mixin homogenizeLink;
}
```

### outline mixins
Remove outline of a element:

```css
@import "niduscss-libs-mixins";

button {
  @mixin removeOutline;
}
```

### Responsive mixins

```css
@import "niduscss-libs-mixins";

/* Define the custom media querie */
@custom-media --small-viewport (min-width: 37.5rem);

/* Import the mixin */
@mixin respondTo --small-viewport {
  height: 2rem;
}
```


## [Changelog](CHANGELOG.md)
