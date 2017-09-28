const tree = [
  {
    id: 153,
    name: 'Safety Sensors',
    weight: 5,
    ingredients: [
      {
        id: 116,
        name: 'Collision Avoidance',
        weight: 6,
        trim_scores: [
          {
            score: 1,
            value: 'available',
          },
        ],
      },
      {
        id: 163,
        name: 'Parking Assist Rear',
        weight: 5,
        trim_scores: [
          {
            score: 1,
            value: 'available',
          },
        ],
      },
      {
        id: 164,
        name: 'Front Parking Assist',
        weight: 5,
      },
      {
        id: 16,
        name: 'Collision Notification',
        weight: 5,
        trim_scores: [
          {
            score: 10,
            value: 'collision notification',
          },
        ],
      },
      {
        id: 114,
        name: 'Camera',
        weight: 5,
        trim_scores: [
          {
            score: 4,
            value: 'rear',
          },
          {
            score: 1,
            value: 'available',
          },
        ],
      },
      {
        id: 117,
        name: 'Pre collision',
        weight: 5,
        trim_scores: [
          {
            score: 10,
            value: 'pre-collision safety system',
          },
        ],
      },
      {
        id: 165,
        name: 'Night Vision Enhancement System ',
        weight: 1,
      },
    ],
  },
  {
    id: 129,
    name: 'Brakes',
    weight: 4,
    ingredients: [
      {
        id: 112,
        name: 'Front Brakes',
        weight: 5,
        trim_scores: [
          {
            score: 7,
            value: 'ventilated disc',
          },
          {
            score: 7,
            value: 'ventilated disc',
          },
        ],
      },
      {
        id: 113,
        name: 'Abs',
        weight: 5,
        trim_scores: [
          {
            score: 5,
            value: 'abs',
          },
          {
            score: 5,
            value: 'abs',
          },
        ],
      },
      {
        id: 115,
        name: 'Rear Brakes',
        weight: 5,
        trim_scores: [
          {
            score: 5,
            value: 'disc',
          },
          {
            score: 7,
            value: 'ventilated disc',
          },
        ],
      },
    ],
  },
  {
    id: 155,
    name: 'Environment Modifiers',
    weight: 4,
    ingredients: [
      {
        id: 18,
        name: 'Pretensioners',
        weight: 5,
        trim_scores: [
          {
            score: 7,
            value: 'front',
          },
          {
            score: 7,
            value: 'front',
          },
        ],
      },
      {
        id: 120,
        name: 'NESTED',
        weight: 2,
        ingredients: [
          {
            trim_scores: [
              {
                score: 1,
                value: 'available',
              },
            ],
            weight: 4,
          },
          {
            weight: 11,
            ingredients: [
              {
                id: 112,
                name: 'Front Brakes',
                weight: 5,
                trim_scores: [
                  {
                    score: 7,
                    value: 'ventilated disc',
                  },
                  {
                    score: 7,
                    value: 'ventilated disc',
                  },
                ],
              },
              {
                id: 113,
                name: 'Abs',
                weight: 5,
                trim_scores: [
                  {
                    score: 5,
                    value: 'abs',
                  },
                  {
                    score: 5,
                    value: 'abs',
                  },
                ],
              },
              {
                id: 115,
                name: 'Rear Brakes',
                weight: 5,
                trim_scores: [
                  {
                    score: 5,
                    value: 'disc',
                  },
                  {
                    score: 7,
                    value: 'ventilated disc',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const normalizedTree = [
  [
    {
      id: 116,
      name: 'Collision Avoidance',
      weight: 0.1875,
      trim_scores: [
        {
          score: 1,
          value: 'available'
        }
      ]
    },
    {
      id: 163,
      name: 'Parking Assist Rear',
      weight: 0.15625,
      trim_scores: [
        {
          score: 1,
          value: 'available'
        }
      ]
    },
    {
      id: 164,
      name: 'Front Parking Assist',
      weight: 0.15625
    },
    {
      id: 16,
      name: 'Collision Notification',
      weight: 0.15625,
      trim_scores: [
        {
          score: 10,
          value: 'collision notification'
        }
      ]
    },
    {
      id: 114,
      name: 'Camera',
      weight: 0.15625,
      trim_scores: [
        {
          score: 4,
          value: 'rear'
        },
        {
          score: 1,
          value: 'available'
        }
      ]
    },
    {
      id: 117,
      name: 'Pre collision',
      weight: 0.15625,
      trim_scores: [
        {
          score: 10,
          value: 'pre-collision safety system'
        }
      ]
    },
    {
      id: 165,
      name: 'Night Vision Enhancement System ',
      weight: 0.03125
    }
  ],
  [
    {
      id: 112,
      name: 'Front Brakes',
      weight: 0.3333333333333333,
      trim_scores: [
        {
          score: 7,
          value: 'ventilated disc'
        },
        {
          score: 7,
          value: 'ventilated disc'
        }
      ]
    },
    {
      id: 113,
      name: 'Abs',
      weight: 0.3333333333333333,
      trim_scores: [
        {
          score: 5,
          value: 'abs'
        },
        {
          score: 5,
          value: 'abs'
        }
      ]
    },
    {
      id: 115,
      name: 'Rear Brakes',
      weight: 0.3333333333333333,
      trim_scores: [
        {
          score: 5,
          value: 'disc'
        },
        {
          score: 7,
          value: 'ventilated disc'
        }
      ]
    }
  ],
  [
    {
      id: 18,
      name: 'Pretensioners',
      weight: 0.7142857142857143,
      trim_scores: [
        {
          score: 7,
          value: 'front'
        },
        {
          score: 7,
          value: 'front'
        }
      ]
    },
    [
      {
        trim_scores: [
          {
            score: 1,
            value: 'available'
          }
        ],
        weight: 0.26666666666666666
      },
      [
        {
          id: 112,
          name: 'Front Brakes',
          weight: 0.3333333333333333,
          trim_scores: [
            {
              score: 7,
              value: 'ventilated disc'
            },
            {
              score: 7,
              value: 'ventilated disc'
            }
          ]
        },
        {
          id: 113,
          name: 'Abs',
          weight: 0.3333333333333333,
          trim_scores: [
            {
              score: 5,
              value: 'abs'
            },
            {
              score: 5,
              value: 'abs'
            }
          ]
        },
        {
          id: 115,
          name: 'Rear Brakes',
          weight: 0.3333333333333333,
          trim_scores: [
            {
              score: 5,
              value: 'disc'
            },
            {
              score: 7,
              value: 'ventilated disc'
            }
          ]
        }
      ]
    ]
  ]
];

const normalizedFlatenedTree = [
  {
    id: 116,
    name: 'Collision Avoidance',
    weight: 0.07211538461538462,
    trim_scores: [
      {
        score: 1,
        value: 'available'
      }
    ]
  },
  {
    id: 163,
    name: 'Parking Assist Rear',
    weight: 0.06009615384615385,
    trim_scores: [
      {
        score: 1,
        value: 'available'
      }
    ]
  },
  {
    id: 164,
    name: 'Front Parking Assist',
    weight: 0.06009615384615385
  },
  {
    id: 16,
    name: 'Collision Notification',
    weight: 0.06009615384615385,
    trim_scores: [
      {
        score: 10,
        value: 'collision notification'
      }
    ]
  },
  {
    id: 114,
    name: 'Camera',
    weight: 0.06009615384615385,
    trim_scores: [
      {
        score: 4,
        value: 'rear'
      },
      {
        score: 1,
        value: 'available'
      }
    ]
  },
  {
    id: 117,
    name: 'Pre collision',
    weight: 0.06009615384615385,
    trim_scores: [
      {
        score: 10,
        value: 'pre-collision safety system'
      }
    ]
  },
  {
    id: 165,
    name: 'Night Vision Enhancement System ',
    weight: 0.01201923076923077
  },
  {
    id: 112,
    name: 'Front Brakes',
    weight: 0.10256410256410256,
    trim_scores: [
      {
        score: 7,
        value: 'ventilated disc'
      },
      {
        score: 7,
        value: 'ventilated disc'
      }
    ]
  },
  {
    id: 113,
    name: 'Abs',
    weight: 0.10256410256410256,
    trim_scores: [
      {
        score: 5,
        value: 'abs'
      },
      {
        score: 5,
        value: 'abs'
      }
    ]
  },
  {
    id: 115,
    name: 'Rear Brakes',
    weight: 0.10256410256410256,
    trim_scores: [
      {
        score: 5,
        value: 'disc'
      },
      {
        score: 7,
        value: 'ventilated disc'
      }
    ]
  },
  {
    id: 18,
    name: 'Pretensioners',
    weight: 0.2197802197802198,
    trim_scores: [
      {
        score: 7,
        value: 'front'
      },
      {
        score: 7,
        value: 'front'
      }
    ]
  },
  {
    trim_scores: [
      {
        score: 1,
        value: 'available'
      }
    ],
    weight: 0.023443223443223443
  },
  {
    id: 112,
    name: 'Front Brakes',
    weight: 0.02148962148962149,
    trim_scores: [
      {
        score: 7,
        value: 'ventilated disc'
      },
      {
        score: 7,
        value: 'ventilated disc'
      }
    ]
  },
  {
    id: 113,
    name: 'Abs',
    weight: 0.02148962148962149,
    trim_scores: [
      {
        score: 5,
        value: 'abs'
      },
      {
        score: 5,
        value: 'abs'
      }
    ]
  },
  {
    id: 115,
    name: 'Rear Brakes',
    weight: 0.02148962148962149,
    trim_scores: [
      {
        score: 5,
        value: 'disc'
      },
      {
        score: 7,
        value: 'ventilated disc'
      }
    ]
  }
];

const simpleTree = [
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

const normalizedSimpleTree = [
  {
    weight: 0.3333333333333333,
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
    weight: 0.6666666666666666,
    ingredients: [
      {
        weight: 0.2222222222222222,
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
        weight: 0.4444444444444444,
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

module.exports = {
  tree,
  normalizedTree,
  normalizedFlatenedTree,
  simpleTree,
  normalizedSimpleTree,
};
