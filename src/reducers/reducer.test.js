import reducerJS808 from './reducer';
import ActionTypes from '../actions/ActionTypes';
import initialState from '../initialState';
import * as bubbleSound from "../sounds/bubbles.mp3";
import * as claySound from "../sounds/clay.mp3";

describe('js808 reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducerJS808(
        undefined,
        {}
      )
    )
    .toEqual(
      initialState
    )
  });

  it('should handle PLAY', () => {
    expect(
      reducerJS808(
        { playing: false },
        { type: ActionTypes.PLAY }
      )
    )
    .toEqual(
      { playing: true }
    )
  });

  it('should handle PAUSE', () => {
    expect(
      reducerJS808(
        { playing: true },
        { type: ActionTypes.PAUSE }
      )
    )
    .toEqual(
      { playing: false }
    );
  });

  it('should handle STOP', () => {
    expect(
      reducerJS808(
        { playing: true },
        { type: ActionTypes.STOP }
      )
    )
    .toEqual(
      {
        playing: false,
        currentBeat: -1
      }
    )
  });

  it('should handle ADVANCE_BEAT', () => {
    expect(
      reducerJS808({
        currentBeat: 1, 
        currentLoop: 0, 
        loops: [
          { maxBeats: 8 }
        ]
      },
      { type: ActionTypes.ADVANCE_BEAT }
      )
    )
    .toEqual({
      currentBeat: 2, 
      currentLoop: 0, 
      loops: [
        { maxBeats: 8 }
      ]
    });

    expect(
      reducerJS808({
        currentBeat: 7, 
        currentLoop: 0, 
        loops: [
          { maxBeats: 8 }
        ]
      },
      { type: ActionTypes.ADVANCE_BEAT }
      )
    )
    .toEqual({
      currentBeat: 0, 
      currentLoop: 0, 
      loops: [
        { maxBeats: 8 }
      ]
    });
  });


 
  it('should handle TOGGLE_BEAT', () => {
    expect(reducerJS808({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ]
      },
      { 
        type: ActionTypes.TOGGLE_BEAT,
        beat: 0,
        sequence: 0
      }
    )
  )
    .toEqual({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [true, false, false, false, false, false, false, false]
            }
          ]
        }
      ]
      }
    );
  });

  it('should handle PLAY_SOUND', () => {
    //Couldn't figure out how to test this since play() is in HowlJS
    expect(reducerJS808({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ],
      instruments: {
        kick: {
          id: "kick",
          displayName: "Kick",
          color: "magenta",
          sound: new Howl({
            src: [bubbleSound],
            volume: 0.5,
            muted: false
          })
        }
      }
      },
      { 
        type: ActionTypes.PLAY_SOUND,
        beat: 0,
        sequence: 0
      }
    )
  )
    .toEqual({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ],
      instruments: {
        kick: {
          id: "kick",
          displayName: "Kick",
          color: "magenta",
          sound: new Howl({
            src: [bubbleSound],
            volume: 0.5,
            muted: false
          })
        }
      }
      }
    );
  });

  it('should handle CHANGE_CURRENT_LOOP', () => {
    //change the loop number and reset current beat to beginning
    expect(
      reducerJS808({
        currentBeat: 2,
        currentLoop: 0
      },
      { 
        type: ActionTypes.CHANGE_CURRENT_LOOP,
        newCurrentLoop: 1
      }
      )
    )
    .toEqual({
      currentBeat: -1,
      currentLoop: 1
    });
  });

  it('should handle CHANGE_BPM', () => {
    expect(
      reducerJS808({
        bpm: 128
      },
      { 
        type: ActionTypes.CHANGE_BPM,
        newBPM: 1
      }
      )
    )
    .toEqual({
      bpm: 1
    });
  });

  it('should handle MUTE', () => {
    // Having difficulty testing this since mute() is in HowlJS which creates other           events/properties that I'm not manipulating manually

  //   expect(reducerJS808({
  //     currentBeat: 0,
  //     currentLoop: 0, 
  //     loops: [
  //       { 
  //         name: "Loop 1",
  //         maxBeats: 8,
  //         sequences: [
  //           {
  //             instrument: "kick",
  //             pattern: [false, false, false, false, false, false, false, false]
  //           }
  //         ]
  //       }
  //     ],
  //     instruments: {
  //       kick: {
  //         id: "kick",
  //         displayName: "Kick",
  //         color: "magenta",
  //         sound: new Howl({
  //           src: [bubbleSound],
  //           volume: 0.5,
  //           muted: false
  //         })
  //       }
  //     }
  //     },
  //     { 
  //       type: ActionTypes.MUTE,
  //       sequenceId: 0
  //     }
  //   )
  // )
  //   .toEqual({
  //     currentBeat: 0,
  //     currentLoop: 0, 
  //     loops: [
  //       { 
  //         name: "Loop 1",
  //         maxBeats: 8,
  //         sequences: [
  //           {
  //             instrument: "kick",
  //             pattern: [false, false, false, false, false, false, false, false]
  //           }
  //         ]
  //       }
  //     ],
  //     instruments: {
  //       kick: {
  //         id: "kick",
  //         displayName: "Kick",
  //         color: "magenta",
  //         sound: new Howl({
  //           src: [bubbleSound],
  //           volume: 0.5,
  //           muted: true
  //         })
  //       }
  //     }
  //     }
  //   );
  });

  it('should handle CHANGE_VOLUME', () => {
    // Having difficulty testing this since volume changes in HowlJS create other         events/properties that I'm not manipulating manually

  //   expect(reducerJS808({
  //     currentBeat: 0,
  //     currentLoop: 0, 
  //     loops: [
  //       { 
  //         name: "Loop 1",
  //         maxBeats: 8,
  //         sequences: [
  //           {
  //             instrument: "kick",
  //             pattern: [false, false, false, false, false, false, false, false]
  //           }
  //         ]
  //       }
  //     ],
  //     instruments: {
  //       kick: {
  //         id: "kick",
  //         displayName: "Kick",
  //         color: "magenta",
  //         sound: new Howl({
  //           src: [bubbleSound],
  //           volume: 0.5,
  //           muted: false
  //         })
  //       }
  //     }
  //     },
  //     { 
  //       type: ActionTypes.CHANGE_VOLUME,
  //       sequenceId: 0,
  //       rangeVolume: null,
  //       increment: 1
  //     }
  //   )
  // )
  //   .toEqual({
  //     currentBeat: 0,
  //     currentLoop: 0, 
  //     loops: [
  //       { 
  //         name: "Loop 1",
  //         maxBeats: 8,
  //         sequences: [
  //           {
  //             instrument: "kick",
  //             pattern: [false, false, false, false, false, false, false, false]
  //           }
  //         ]
  //       }
  //     ],
  //     instruments: {
  //       kick: {
  //         id: "kick",
  //         displayName: "Kick",
  //         color: "magenta",
  //         sound: new Howl({
  //           src: [bubbleSound],
  //           volume: 0.6,
  //           muted: false
  //         })
  //       }
  //     }
  //     }
  //   );
  });

  it('should handle ADD_SEQUENCE', () => {
    expect(reducerJS808({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ],
      instruments: {
        kick: {
          id: "kick",
          displayName: "Kick",
          color: "magenta",
          sound: new Howl({
            src: [bubbleSound],
            volume: 0.5,
            muted: false
          })
        },
        snare: {
          id: "snare",
          displayName: "Snare",
          color: "gold",
          sound: new Howl({
            src: [claySound],
            volume: 0.5,
            muted: false
          })
        }
      }
      },
      { 
        type: ActionTypes.ADD_SEQUENCE
      }
    )
  )
    .toEqual({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            },
            {
              instrument: "snare",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ],
      instruments: {
        kick: {
          id: "kick",
          displayName: "Kick",
          color: "magenta",
          sound: new Howl({
            src: [bubbleSound],
            volume: 0.5,
            muted: false
          })
        },
        snare: {
          id: "snare",
          displayName: "Snare",
          color: "gold",
          sound: new Howl({
            src: [claySound],
            volume: 0.5,
            muted: false
          })
        }
      }
      }
    );
  });

  it('should handle DELETE_SEQUENCE', () => {
    expect(reducerJS808({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ],
      instruments: {
        kick: {
          id: "kick",
          displayName: "Kick",
          color: "magenta",
          sound: new Howl({
            src: [bubbleSound],
            volume: 0.5,
            muted: false
          })
        },
        snare: {
          id: "snare",
          displayName: "Snare",
          color: "gold",
          sound: new Howl({
            src: [claySound],
            volume: 0.5,
            muted: false
          })
        }
      }
      },
      { 
        type: ActionTypes.DELETE_SEQUENCE,
        sequenceId: 1
      }
    )
  )
    .toEqual({
      currentBeat: 0,
      currentLoop: 0, 
      loops: [
        { 
          name: "Loop 1",
          maxBeats: 8,
          sequences: [
            {
              instrument: "kick",
              pattern: [false, false, false, false, false, false, false, false]
            }
          ]
        }
      ],
      instruments: {
        kick: {
          id: "kick",
          displayName: "Kick",
          color: "magenta",
          sound: new Howl({
            src: [bubbleSound],
            volume: 0.5,
            muted: false
          })
        },
        snare: {
          id: "snare",
          displayName: "Snare",
          color: "gold",
          sound: new Howl({
            src: [claySound],
            volume: 0.5,
            muted: false
          })
        }
      }
      }
    );
  });

  it('should handle CHANGE_INSTRUMENT', () => {
    /*
    Having difficulty testing because I copy
    over the mute status to the new instrument.
    HowlJS adds events/props to the sound that
    I do not manipulate manually
    */

  //   expect(reducerJS808({
  //     currentBeat: 0,
  //     currentLoop: 0, 
  //     loops: [
  //       { 
  //         name: "Loop 1",
  //         maxBeats: 8,
  //         sequences: [
  //           {
  //             instrument: "kick",
  //             pattern: [false, false, false, false, false, false, false, false]
  //           }
  //         ]
  //       }
  //     ],
  //     instruments: {
  //       kick: {
  //         id: "kick",
  //         displayName: "Kick",
  //         color: "magenta",
  //         sound: new Howl({
  //           src: [bubbleSound],
  //           volume: 0.5,
  //           muted: false
  //         })
  //       },
  //       snare: {
  //         id: "snare",
  //         displayName: "Snare",
  //         color: "gold",
  //         sound: new Howl({
  //           src: [claySound],
  //           volume: 0.5,
  //           muted: false
  //         })
  //       }
  //     }
  //     },
  //     { 
  //       type: ActionTypes.CHANGE_INSTRUMENT,
  //       sequenceId: 0,
  //       newInstrument: "snare"
  //     }
  //   )
  // )
  //   .toEqual({
  //     currentBeat: 0,
  //     currentLoop: 0, 
  //     loops: [
  //       { 
  //         name: "Loop 1",
  //         maxBeats: 8,
  //         sequences: [
  //           {
  //             instrument: "snare",
  //             pattern: [false, false, false, false, false, false, false, false]
  //           }
  //         ]
  //       }
  //     ],
  //     instruments: {
  //       kick: {
  //         id: "kick",
  //         displayName: "Kick",
  //         color: "magenta",
  //         sound: new Howl({
  //           src: [bubbleSound],
  //           volume: 0.5,
  //           muted: false
  //         })
  //       },
  //       snare: {
  //         id: "snare",
  //         displayName: "Snare",
  //         color: "gold",
  //         sound: new Howl({
  //           src: [claySound],
  //           volume: 0.5,
  //           muted: false
  //         })
  //       }
  //     }
  //     }
  //   );
  });
})

it('should handle JUMP_TO_BEAT', () => {
  expect(
    reducerJS808({
      currentBeat: 1
    },
    {
      type: ActionTypes.JUMP_TO_BEAT,
      newCurrentBeat: 4
    })
  )
  .toEqual({
    currentBeat: 4
  });
});

it('should handle CLEAR_BEATS', () => {
  expect(reducerJS808({
    currentBeat: 0,
    currentLoop: 0, 
    loops: [
      { 
        name: "Loop 1",
        maxBeats: 8,
        sequences: [
          {
            instrument: "kick",
            pattern: [false, true, true, false, false, true, false, false]
          }
        ]
      }
    ]
    },
    { 
      type: ActionTypes.CLEAR_BEATS
    }
  )
)
  .toEqual({
    currentBeat: 0,
    currentLoop: 0, 
    loops: [
      { 
        name: "Loop 1",
        maxBeats: 8,
        sequences: [
          {
            instrument: "kick",
            pattern: [false, false, false, false, false, false, false, false]
          }
        ]
      }
    ]
    }
  );
});