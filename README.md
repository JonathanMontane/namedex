# Namedex

Associate addresses with list of 3 to 5 words based on the needed precision

# Usage
```js
const namedex = require('./namedex');

// namedex(lat, lng, nbWords)
console.log(namedex.encode(-77.480, 38.866, 3)); // [ 'heavenly', 'genuine', 'leafy' ]
console.log(namedex.encode(-77.460, 38.866, 3)); // [ 'heavenly', 'genuine', 'merry' ]
console.log(namedex.encode(-77.480, 38.896, 3)); // [ 'heavenly', 'genuine', 'needy' ]

console.log(namedex.encode(-77.480, 38.866, 4)); // [ 'heavenly', 'genuine', 'leafy', 'neighboring' ]
console.log(namedex.encode(-77.480, 38.866, 5)); // [ 'heavenly', 'genuine', 'leafy', 'neighboring', 'glistening' ]

console.log(namedex.decode([ 'heavenly', 'genuine', 'leafy', 'neighboring', 'glistening' ]));
/*
{
  lng: -77.48000085353851,
  lat: 38.86599987745285,
  error: { lng: 0.000005364418029785156, lat: 0.000002682209014892578 }
}
*/
```
