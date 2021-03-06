# niduscss-components-dropdown
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-components-dropdown.svg
[npm-url]: https://npmjs.org/package/niduscss-components-dropdown

> Base styles to create dropdown components for niduscss framework.

## Installation

```console
$ npm install niduscss-components-dropdown
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --Dropdown-z-index: 8000;
  --Dropdown-checked-color: #fafafa;
  --Dropdown-pointer-color: #fafafa;
  --Dropdown-triger-width: 3rem;
  --Dropdown-pointer-size: 0.75rem;
  --Dropdown-list-gap: 0.5rem;
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
@import "niduscss-components-dropdown";

/* Other styles */
```

Use in html files (angular component)

```html
<div class="Dropdown">
  <input type="checkbox" id="LangList-toggle">
  <label class="Dropdown-label IconButton MaterialIcon" for="LangList-toggle">language</label>
  <ul class="Dropdown-list dd-right dd-pointer" close-dd="LangList-toggle">
    <li ng-repeat="lang in $ctrl.languages">
      <div class="Dropdown-item u-textEllipsis" ng-click="$ctrl.changeLanguage(lang)">
        {{'BASE.HEADER.LANG.' + lang | translate}}
      </div>
    </li>
  </ul>
</div>
```

### Variations

If use some of this class in `ul` element (Dropdown-list) you can change the dropdown direction:

- `dd-pointer`: Put a poiter between triger button and the dropdown. (default: disabled).
- `dd-right`: The dropdown start from left of triger button. (default: left).
- `dd-up`: The dropdown start from the top of triger button. (default: down).

## [Changelog](CHANGELOG.md)