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

const decimalToBase36 = (dec) => {
  const offset = dec < 10 ? 48 : 87;
  return String.fromCharCode(offset + dec);
}

const convertIdToIndex = (id) => {
  return base36ToDecimal(id[0]) * 36 + base36ToDecimal(id[1])
}

const convertIndexToId = (index) => {
  const firstLetter = decimalToBase36(Math.floor(index / 36));
  const secondLetter = decimalToBase36(index % 36);

  return firstLetter + secondLetter;
}

const encode = (lat, lng, words = 3) => {
  const geohash = Geohash.encode(lat, lng, words * 2);
  const wordsIds = split2Letters(geohash);
  const wordsIndex = wordsIds.map(convertIdToIndex);

  return wordsIndex.map((index) => adjectives[index]);
}

const decode = (words) => {
  const indices = words.map((word) => adjectives.indexOf(word));
  const ids = indices.map(convertIndexToId);
  const geohash = ids.join('');
  return Geohash.decode(geohash, true);
}

module.exports = {
  encode,
  decode
};
