'use strict'

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-nested': {},
    'postcss-calc': {},
    'postcss-color-function': {},
    autoprefixer: {
      browsers: ['last 2 versions'],
    },
  },
}