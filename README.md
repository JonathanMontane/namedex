# Purpose

Namedex is a small utility that transforms GPS coordinates into a list of words humans can read and say out loud, and back.
This allows users to generate addresses for locations that would not have any otherwise.

## Installation

```bash
npm install namedex
yarn add namedex
```

## Usage
Namedex exposes two methods: `encode` and `decode`.

### encode(lat, lng, nbWords)

```js
const namedex = require('namedex');

namedex.encode(48.880411, 2.327001, 3);
// returns [ 'speedy', 'each', 'agreeable' ]
namedex.encode(48.868423, 2.344898, 3);
// returns [ 'speedy', 'each', 'beneficial' ]
namedex.encode(48.858255, 2.349618, 3);
// returns [ 'speedy', 'dual', 'shabby' ]

namedex.encode(48.880411, 2.327001, 4);
// returns [ 'speedy', 'each', 'agreeable', 'forceful' ]
namedex.encode(48.880411, 2.327001, 5);
// returns [ 'speedy', 'each', 'agreeable', 'forceful', 'sturdy' ]
```

### decode(words)

```js
const namedex = require('namedex');

namedex.decode([ 'speedy', 'each', 'agreeable', 'forceful' ]);
/* returns 
{
  lng: 48.88040542602539,
  lat: 2.326955795288086,
  error: { lng: 0.000171661376953125, lat: 0.0000858306884765625 }
}
*/
```
