/**
 * 
 */

/**
 * Change a tree with unbounded weights to one with normalized weights
 * @param {Array<Node>} tree
 * @prop {Object} tree.node
 * @prop {Number} tree.node.weight Non-normalized weight
 * @prop {Number?} tree.node.score If node is not a parent, it has a score
 * @prop {Array<Node>?} tree.node.ingredients If node is a parent,
 * it has children - another tree
 * @return {Array<Node>} a tree with normalized weights
 */
export function normalizeWeights(tree) {
  const normalizeRow = (row) => {
    // Find sum of all weights
    const weightSum = row
      .map(x => x.weight)
      .reduce((a, b) => a + b, 0);
    // divide each weight by the sum of all weights to get weights between 0-1
    // recursively call if the node has children
    return row
      .map(node => node.weight / weightSum)
      .map((node) => {
        if (Array.isArray(node.ingredients)) {
          return normalizeWeights(node.ingredients);
        }
        return node;
      });
  };
  return normalizeRow(tree);
}

/**
 * Takes a tree with normalized weights and flattens it
 * @param {Array<Node>} tree
 * @prop {Object} tree.node
 * @prop {Number} tree.node.weight Non-normalized weight
 * @prop {Number?} tree.node.score If node is not a parent, it has a score
 * @prop {Array<Node>?} tree.node.ingredients If node is a parent, it has children - another tree
 * @return {Array<Node>} a flattened tree with normalized weights
 */
export function flattenTree(tree) {
  const flattenParentNode = (node) => {
    const bringUp = (child) => {
      if (Array.isArray(child.ingredients)) {
        return flattenParentNode(child);
      }
      return node.weight * child.weight;
    };
    return node.children.map(bringUp);
  };
  const handleNode = (node) => {
    if (Array.isArray(node.ingredients)) {
      return flattenParentNode(node);
    }
    return node;
  };
  return tree.map(handleNode);
}

/**
 * Computes the weighted average of a tree of nodes
 * each node has a weight, and either a score, or another tree
 * @param {Array} tree The tree described above
 * @return {Number} The weighted average of all scores
 */
export default function recursiveWeightedAverage(tree) {
  return flattenTree(normalizeWeights(tree)).reduce(
    (acc, val) => acc + (val.score * val.weight),
    0,
  );
}
