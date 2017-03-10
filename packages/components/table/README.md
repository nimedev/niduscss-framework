# niduscss-components-table
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-components-table.svg
[npm-url]: https://npmjs.org/package/niduscss-components-table

> Styles for tables elements.

## Installation

```console
$ npm install niduscss-components-table
```

## Usage

Import styles:

styles.css:

```css
/* Components
   ========================================================================== */
@import "niduscss-components-table";

/* Other styles */
```

Use in html files

```html
<div class="Table">
  <div class="Table-header">
    <span class="Table-title">Title</span>
  </div>
  <div class="Table-content">
    <table>
      <thead>
        <tr>
          <th>Col1</th>
          <th>Col2</th>
          <th>Col3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Content 11</td>
          <td>Content 12</td>
          <td>Content 13</td>
        </tr>
        <tr>
          <td>Content 21</td>
          <td>Content 22</td>
          <td>Content 23</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="Table-footer">Footer</div>
</div>
```

## [Changelog](CHANGELOG.md)