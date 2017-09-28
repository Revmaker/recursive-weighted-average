/**
 * Recursively calculate the weighted average of a array of objects, called nodes
 * Nodes always have a "weight" property, used for the weighted average calculation
 * Nodes either have a "score" property, if they are a terminal node,
 * or they have an "ingredients" property, if they are a parent node.
 * 
 * Also exposed are the helper functions, normalizeWeights and flattenTree,
 * in case you want (as I do) to flatten the tree
 * and have the weights all be comparable.
 */

/**
 * This is to account for strucures with differently named properties
 * and structures.
 * If score is not an int, need to update getScore function
 */
const defaultConfig = {
  node: {
    weight: 'weight',
    score: 'trim_scores',
    children: 'ingredients',
    getScore: x => x,
  }
};

/**
 * Change a tree with unbounded weights to one with normalized weights
 * eg, in [0,1]
 * Parent nodes weights will be ignored, so are meaningless after this application
 * @param {Array<Node>} tree
 * @prop {Object} tree.node
 * @prop {Number} tree.node.weight Non-normalized weight
 * @prop {Number?} tree.node.score If node is not a parent, it has a score
 * @prop {Array<Node>?} tree.node.children If node is a parent,
 * it has children - another tree
 * @return {Array<Node>} a tree with normalized weights
 */
const normalizeWeights = (tree, parentWeight = 1, config = defaultConfig) => {
  // Find sum of all weights
  const weightSum = tree
    .map(node => node[config.node.weight])
    .reduce((a, b) => a + b, 0);
  // divide each weight by the sum of all weights to get weights between 0-1
  // recursively call if the node has children
  return tree
    .map(node =>
      Object.assign({}, node, {
        [config.node.weight]: (node[config.node.weight] / weightSum) * parentWeight,
      })
    )
    .map(node => {
      if (Array.isArray(node[config.node.children])) {
        return Object.assign({}, node, {
          [config.node.children]: normalizeWeights(node[config.node.children], node[config.node.weight]),
        });
      }
      return node;
    });
};

/**
 * THIS FUNCTION IS WIP
 * Takes a tree with normalized weights and flattens it.
 * @note This is not just flattening an array of objects.
 * Because the weights of child nodes need to be re-weighted
 * based on their parent's weight.
 * @note THIS WILL PRODUCE NONSENSICAL OUTPUT IF WEIGHTS ARE > 1
 * so you should probably call normalizeWeights first
 * @param {Array<Node>} tree
 * @prop {Object} tree.node
 * @prop {Number} tree.node.weight Non-normalized weight
 * @prop {Number?} tree.node.score If node is not a parent, it has a score
 * @prop {Array<Node>?} tree.node.children If node is a parent, it has children - another tree
 * @return {Array<Node>} a flattened tree with normalized weights
 */
const flattenTree = (tree, config = defaultConfig) => {
  const flatten = (nodes = [], acc = []) => {
    if (nodes.length === 0) {
      return acc;
    }
    const [ head, ...tail ] = nodes;
    if (Array.isArray(head[config.node.children])) {
      return flatten(tail.concat(head[config.node.children]), acc);
    }
    return flatten(tail, acc.concat([head]));
  };
  return flatten(tree, []);
};

/**
 * Computes the weighted average of a tree of nodes
 * each node has a weight, and either a score, or another tree
 * @todo MAKE THIS WORK FOR NON-NUMERIC (STRUCTURED) SCORES
 * @param {Array} tree The tree described above
 * @prop {Number} tree.node.weight Non-normalized weight
 * @prop {Number?} tree.node.score If node is not a parent, it has a score
 * @return {Number} The weighted average of all scores
 */
const recursiveWeightedAverage = (tree, config = defaultConfig) => {
  return flattenTree(normalizeWeights(tree)).reduce(
    (acc, val) => acc + (config.node.getScore(val[config.node.score]) * val[config.node.weight]),
    0
  );
};

module.exports = {
  defaultConfig,
  normalizeWeights,
  flattenTree,
  recursiveWeightedAverage
};
