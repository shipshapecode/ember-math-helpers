/* eslint-env node */
/**
 * Finds the intersection between 2 arrays.
 *
 * let a = [1, 2, 3];
 * let b = [3, 4, 5];
 * intersection(a, b) === [3];
 * intersection(b, a) === [3];
 *
 * @public
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array}
 */
module.exports = function intersection(a, b) {
  let arrays = [a, b];

  return arrays.pop().filter(function(candidate) {
    for (let i = 0; i < arrays.length; i++) {
      let found = false;
      let array = arrays[i];
      for (let j = 0; j < array.length; j++) {
        if (array[j] === candidate) {
          found = true;
          break;
        }
      }

      if (found === false) {
        return false;
      }
    }

    return true;
  });
};
