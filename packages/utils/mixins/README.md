# niduscss-utils-mixins
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-utils-mixins.svg
[npm-url]: https://npmjs.org/package/niduscss-utils-mixins

> Mixins for utils modules of niduscss framework.

## Installation

```console
$ npm install niduscss-utils-mixins
```

## Usage

### Align mixins

```css
@import "niduscss-utils-mixins";

/* Container */
.Container {
  @mixin u-alignContainer;

  /* Import the vertical centering ghost mixin */
  &::before {
    @mixin u-alignGhost;
  }
}
```

### Shadow mixins

```css
@import "niduscss-utils-mixins";

header {
  /* Import the mixin */
  @mixin u-shadowBottom;
}
```

### Text mixins

```css
@import "niduscss-utils-mixins";

label {
  /* import ellipsis hack mixin */
  @mixin u-textEllipsis;
}
```

## [Changelog](CHANGELOG.md)
