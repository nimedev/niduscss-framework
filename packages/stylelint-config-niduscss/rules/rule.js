'use strict'

module.exports = {
  rules: {
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
      },
    ],
  },
}
