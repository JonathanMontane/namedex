# Namedex

Associate addresses with list of 3 to 5 words based on the needed precision

# Usage
```js
const namedex = require('./namedex');

// namedex(lat, lng, nbWords)
console.log(namedex(-77.480, 38.866, 3)); // [ 'heavenly', 'genuine', 'leafy' ]
console.log(namedex(-77.460, 38.866, 3)); // [ 'heavenly', 'genuine', 'merry' ]
console.log(namedex(-77.480, 38.896, 3)); // [ 'heavenly', 'genuine', 'needy' ]

console.log(namedex(-77.480, 38.866, 4)); // [ 'heavenly', 'genuine', 'leafy', 'neighboring' ]
console.log(namedex(-77.480, 38.866, 5)); // [ 'heavenly', 'genuine', 'leafy', 'neighboring', 'glistening' ]
```
