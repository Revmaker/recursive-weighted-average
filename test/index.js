const assert = require('assert');
const util = require('util');

const { normalizeWeights, flattenTree } = require('../index');
const {
  tree,
  normalizedTree,
  normalizedFlatenedTree,
  simpleTree,
  normalizedSimpleTree,
} = require('./data/examples');

const inspect = x => util.inspect(x, false, null);

const assertWithMessage = (actual, expected, testName, dataName) => {
  assert.deepStrictEqual(
    actual,
    expected,
    `${testName} test failed with ${dataName} data,
  expected: ${inspect(expected)}
  
  
  got: ${inspect(actual)}
  `
  );
};

assertWithMessage(
  normalizeWeights(simpleTree),
  normalizedSimpleTree,
  'normalizeWeights',
  'simple example'
);

assertWithMessage(
  normalizeWeights(tree),
  normalizedTree,
  'normalizeWeights',
  'example'
);

assertWithMessage(
  flattenTree(normalizedTree),
  normalizedFlatenedTree,
  'flattenTree',
  'example'
);
