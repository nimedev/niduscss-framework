# niduscss-material-colors
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-material-colors.svg
[npm-url]: https://npmjs.org/package/niduscss-material-colors

> Material design colors palette for niduscss framework.

## Installation

```console
$ npm install niduscss-material-colors
```

## Usage

You can use the custom properties in any file.

Example: create a setting.css file:

```css
@import "niduscss-material-colors";

:root {
  /**
    * Material themming
    * Default material shadows:
    * - Primary and warning colors: (500, 300, 800 and A100)
    * - Accent colors: (A200, A100, A400 and A700)
    * Use: choose a palette for primary, accent and warn category then
    * use a map to set de shadows (default, hue1, hue2 and hue3).
    */
  --App-primary-df: var(--Material-indigo-500);
  --App-primary-h1: var(--Material-indigo-300);
  --App-primary-h2: var(--Material-indigo-800);
  --App-primary-h3: var(--Material-indigo-50);
  --App-accent-df: var(--Material-deep-orange-A400);
  --App-accent-h1: var(--Material-deep-orange-A100);
  --App-accent-h2: var(--Material-deep-orange-A200);
  --App-accent-h3: var(--Material-deep-orange-A700);
  --App-warn-df: var(--Material-red-500);
  --App-warn-h1: var(--Material-red-300);
  --App-warn-h2: var(--Material-red-800);
  --App-warn-h3: var(--Material-red-A100);
}
```

## [Changelog](CHANGELOG.md)