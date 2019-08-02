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

const base32Map = '0123456789bcdefghjkmnpqrstuvwxyz';

const base32ToDecimal = (b32) => {
  return base32Map.indexOf(b32);
}

const decimalToBase32 = (dec) => {
  return base32Map[dec];
}

const convertIdToIndex = (id) => {
  return base32ToDecimal(id[0]) * 32 + base32ToDecimal(id[1])
}

const convertIndexToId = (index) => {
  const firstLetter = decimalToBase32(Math.floor(index / 32));
  const secondLetter = decimalToBase32(index % 32);

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
