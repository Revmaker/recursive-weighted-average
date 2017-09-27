const assert = require('assert');

const {
  normalizeWeights,
  flattenTree,
  recursiveWeightedAverage,
} = require('../index');
const { tree, treeWithNormalizedWeights, simpleTree } = require('./data/examples');

/**
 * @todo make example data simpler
 */

assert.deepStrictEqual(
  normalizeWeights(tree),
  treeWithNormalizedWeights,
  'normalizeWeights test failed with example data'
);


