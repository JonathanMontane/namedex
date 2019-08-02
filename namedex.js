const Geohash = require('@geonet/geohash');
const adjectives = require('./adjectives');

const split2Letters = (text) => {
  return text.split('').reduce((pairs, letter, i) => {
    if (i % 2 === 0) {
      return [...pairs, letter];
    }

    return [...pairs.slice(0, -1), pairs[pairs.length - 1] + letter];
  }, []);
}

const base36ToDecimal = (b36) => {
  if (b36.charCodeAt(0) >= 97) {
    //letter
    return b36.charCodeAt(0) - 97 + 10
  }

  // number
  return b36.charCodeAt(0) - 48;
}

const convertIdToIndex = (id) => {
  return base36ToDecimal(id[0]) * 36 + base36ToDecimal(id[1])
}

const namedex = (lat, lng, words = 3) => {
  const geohash = Geohash.encode(lat, lng, words * 2);
  const wordsIds = split2Letters(geohash);
  const wordsIndex = wordsIds.map(convertIdToIndex);

  return wordsIndex.map((index) => adjectives[index]);
}

module.exports = namedex;
