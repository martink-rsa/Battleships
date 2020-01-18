/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */

// Ship object that is placed on the map by the player.

const Ship = (id, length, hits, sunk, alignment) => {
  const _id = id;
  const _length = length;
  let _hits = hits;
  let _sunk = sunk;
  let _alignment = alignment;

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

  const changeAlignment = () => {
    if (_alignment === 'horizontal') {
      _alignment = 'vertical';
    } else if (_alignment === 'vertical') {
      _alignment = 'horizontal';
    }
  };

  return {
    // Properties
    get id() {
      return _id;
    },
    get length() {
      return _length;
    },
    get hits() {
      return _hits;
    },
    get sunk() {
      return _sunk;
    },
    get alignment() {
      return _alignment;
    },
    // Functions
    hit,
    isSunk,
    changeAlignment,
  };
};

export default Ship;
