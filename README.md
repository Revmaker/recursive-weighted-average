# Recursive Weighted Average

A package for computing the weighted average of all leaf nodes of a tree with the following shape:

```sh
                  Root = [...]
                       ^
     +-----------------+----------------------+
     |                 |                      |
     |                 |                      |
     +                 +                      +
Ingredient1,1        Ingredient1,2       Ingredient1,3
{                    {                   {
  weight: 2,           weight: 5,          weight: 10
  score: 10            score: 3            ingredients: [...]
}                    }                   }                ^
                                   +----------------------+----+
                                   |                           |
                                   +                           +
                              Ingredient1,3,1             Ingredient1,3,2
                              {                           {
                                weight: 5,                  weight: 3,
                                ingredients: [...]          score: 8
                              }                ^          }
                           +-------------------+----+
                           |                        |
                           |                        |
                           +                        +
                      Ingredient1,3,1,1        Ingredient1,3,1,2
                      {                        {
                        weight: 0,               weight: 3,
                        score: 5                 score: 1
                      }                        }
```

There are also helper functions that may also be useful to flatten the tree and normalize the tree across heights.

## Fairly Important Disclaimer

The package has working helper functions (that are actually what CarLabs needs currently)... It does not have a working function to compute... the weighted average. I bet I tricked you with this package name.

![psych](https://media.giphy.com/media/3o6EhKuZaoEizGGTIc/giphy.gif)

## Installation

`npm i --save @carlabs/recursive-weighted-average`

## Usage

```js
  const rwa = require('@carlabs/recursive-weighted-average');

  const tree = [
  {
    weight: 1,
    trim_scores: [
      {
        score: 1
      },
      {
        score: 2
      }
    ]
  },
  {
    weight: 9,
    ingredients: [
      {
        weight: 10,
        trim_scores: [
          {
            score: 1
          },
          {
            score: 2
          }
        ]
      },
      {
        weight: 20,
        trim_scores: [
          {
            score: 1
          },
          {
            score: 2
          }
        ]
      }
    ]
  }
];

const treeWithNormalizedWeights = rwa.normalizeWeights(tree);
const flattenedAndNormalizedTree = rwa.flattenTree(treeWithNormalizedWeights);
```

## Configuration

Currently, you can configure the names of the fields: weight, scores, children, as well as the getter function for the score:

```js
  const myConfig = {
    node: {
      weight: 'myWeightFieldName',
      score: 'myScoreFieldName',
      children: 'myChildNodeName',
      getScore: x => x,
    },
  };
```

The defaults are set to:

```js
  const defaultConfig = {
    node: {
      weight: 'weight',
      score: 'trim_scores',
      children: 'ingredients',
      getScore: x => x,
    }
  };
```

## Development

Fairly standard Node setup: eslint, prettier... simple tests

To update the NPM package:

1. make changes
1. stage and commit changes
1. run `npm version patch` (or `minor` or `major`) - this will run tests, bump the version, and push the changes to GitHub
