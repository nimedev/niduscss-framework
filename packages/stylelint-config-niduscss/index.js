module.exports = {
  extends: [
    './rules/at-rule',
    './rules/block',
    './rules/color',
    './rules/comment',
    './rules/declaration-block',
    './rules/declaration',
    './rules/function',
    './rules/general',
    './rules/length',
    './rules/media-query-list',
    './rules/media',
    './rules/number',
    './rules/rule',
    './rules/selector-list',
    './rules/selector',
    './rules/string',
    './rules/value-list'
  ].map(require.resolve)
}
