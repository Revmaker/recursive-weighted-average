const assert = require('assert');

const {
  normalizeWeights,
  flattenTree,
} = require('../index');
const { tree, normalizedTree, normalizedFlatenedTree, simpleTree, normalizedSimpleTree } = require('./data/examples');

assert.deepStrictEqual(
  normalizeWeights(simpleTree),
  normalizedSimpleTree,
  'normalizeWeights test failed with simple example data'
);

assert.deepStrictEqual(
  normalizeWeights(tree),
  normalizedTree,
  'normalizeWeights test failed with example data'
);

assert.deepStrictEqual(
  flattenTree(normalizedTree),
  normalizedFlatenedTree,
  'flattenTree test failed with example data'
);
