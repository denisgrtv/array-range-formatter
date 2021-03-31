# array-range-formatter
Sorts array of positive number as string by ranges.

## Example
```js
const { format } = require('array-range-formatter');

format([1,3,4,5,6,7,8,10,11,12])
  .then((result) => console.log(result))
  // 1,3-8,10-12
```

## Installation
```bash
npm install git@github.com:denisgrtv/array-range-formatter.git#1.0.0
```

## Tests
```bash
npm run test
```