'use strict'

module.exports = {
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: [
          'first-nested'
        ]
      }
    ],
    'comment-whitespace-inside': 'always'
  }
}
