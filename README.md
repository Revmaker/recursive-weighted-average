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
