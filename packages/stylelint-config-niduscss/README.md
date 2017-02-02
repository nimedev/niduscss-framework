# stylelint-config-niduscss
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/stylelint-config-niduscss.svg
[npm-url]: https://npmjs.org/package/stylelint-config-niduscss

> An stylelint [Shareable Config](https://stylelint.io/user-guide/configuration/) for [niduscss framework](https://github.com/nimedev/niduscss-framework) style guide.

## Installation

It requires `stylelint`

```sh
$ npm install stylelint-config-niduscss stylelint
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-niduscss"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to 4:


```json
{
  "extends": "stylelint-config-niduscss",
  "rules": {
    "indentation": 4
  }
}
```
