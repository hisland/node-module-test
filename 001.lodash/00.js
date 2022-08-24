import _ from 'lodash'

const gg = _.groupBy(
  [
    { type: 'aa', val: 'aa1' },
    { type: 'aa', val: 'aa2' },
    { type: 'aa', val: 'aa3' },
    { type: 'bb', val: 'bb1' },
    { type: 'bb', val: 'bb2' },
    { type: 'bb', val: 'bb3' },
  ],
  'type'
)

console.log(gg)
