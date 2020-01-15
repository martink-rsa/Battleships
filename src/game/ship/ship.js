/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */

// Ship object that is placed on the map by the player.

const Ship = (length, hits, sunk) => {
  const _length = length;
  let _hits = hits;
  let _sunk = sunk;

  const isSunk = () => {
    if (_hits.length === _length) {
      return true;
    }
    return false;
  };

  const hit = location => {
    const tempHits = [..._hits];
    tempHits.push(location);
    tempHits.sort((a, b) => a - b);
    _hits = [...tempHits];
    if (isSunk) {
      _sunk = true;
    }
  };

  return {
    // Properties
    get length() {
      return _length;
    },
    get hits() {
      return _hits;
    },
    get sunk() {
      return _sunk;
    },
    // Functions
    hit,
    isSunk,
  };
};

export { Ship };
