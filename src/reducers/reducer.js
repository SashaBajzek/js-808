// @flow

import initialState from '../initialState';
import update from 'immutability-helper';
import { getInstrumentFromSequence, getBeat, getAvailableInstruments, getMuteFromSequence } from '../getters';
import { State } from '../initialState';
import { Action } from '../actions/actions';

function play(state) {
  return Object.assign({}, state, {
    playing: true
  });
}

function pause(state) {
  return Object.assign({}, state, {
    playing: false
  });
}

function stop(state) {
  return Object.assign({}, state, {
    playing: false,
    currentBeat: -1
  });
}

function advanceBeat(state) {
  const {currentBeat, currentLoop, loops} = state;
  
  if(currentBeat + 1 === loops[currentLoop].maxBeats){
    return Object.assign({}, state, {
      currentBeat: 0
    });
  } else {
    return Object.assign({}, state, {
      currentBeat: currentBeat + 1
    });
  }
}

function toggleBeat(state, beat, sequence) {
  let currentBeatVal = getBeat(state, sequence, beat);
  let newLoops = update(state.loops, {
    [state.currentLoop]: {
      sequences: {
        [sequence]: {
          pattern: {
            [beat]: {
              $apply: function(x) {
                return !currentBeatVal;
              }
            }
          }
        }
      }
    }
  });
  return Object.assign({}, state, {
    loops: newLoops
  });
}

function playSound(state) {
  const {currentBeat, currentLoop, loops} = state;
  let sequences = loops[currentLoop].sequences;
    sequences.forEach((sequence, index)=> {
      let sequenceNum = index;
      let playBeat = getBeat(state, sequenceNum, currentBeat);
      if(playBeat) {
        getInstrumentFromSequence(state, sequenceNum).sound.play();
      }
    });
  return state;
}

function changeCurrentLoop(state, newCurrentLoop) {
  return Object.assign({}, state, {
    currentLoop: newCurrentLoop,
    currentBeat: -1
  });
}

function changeBPM(state, newBPM) {
  return Object.assign({}, state, {
    bpm: newBPM
  });
}

function mute(state, sequenceId) {
  let instrument = getInstrumentFromSequence(state, sequenceId);
  let soundId = instrument.id;
  let isMuted = instrument.sound.mute();
  let newSounds = update(state.instruments, {
    [soundId]: {
      sound: {
          $apply: function(x) {
            return x.mute(!isMuted);
          }
        
      }
    }
  });
  return Object.assign({}, state, {
    sounds: newSounds
  });
}

function changeVolume(state, sequenceId, rangeVolume, increment) {
  let instrument = getInstrumentFromSequence(state, sequenceId);
  let soundId = instrument.id;
  let currentVolume = instrument.sound.volume();
  let newVolume = currentVolume; //set initial newVolume

  if(increment) {
    //if using buttons
    if(increment > 0){
      newVolume = currentVolume + 0.1;
    } else {
      newVolume = currentVolume - 0.1;
    }
  } else {
    //if dragging the range
    newVolume = rangeVolume;
  }

  let newSounds = update(state.instruments, {
    [soundId]: {
      sound: {
          $apply: function(x) {
            x.volume(newVolume);
            x.mute(false);
            return x;
          }
        
      }
    }
  });
  return Object.assign({}, state, {
    sounds: newSounds
  });
}

function addSequence(state) {
  let newSequence = {};
  let defaultInstrument = getAvailableInstruments(state)[0].id;
  if(state.loops[state.currentLoop].maxBeats === 8) {
    newSequence = {
      instrument: defaultInstrument,
      pattern: [false, false, false, false, false, false, false, false]
    }
  } else if(state.loops[state.currentLoop].maxBeats === 16) {
    newSequence = {
      instrument: defaultInstrument,
      pattern: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    }
  }
  let newLoops = update(state.loops, {
    [state.currentLoop]: {
      sequences: {
        $push: [newSequence]
      }
    }
  });
  return Object.assign({}, state, {
    loops: newLoops
  });
}

function deleteSequence(state, sequenceId) {
  let newLoops = update(state.loops, {
    [state.currentLoop]: {
      sequences: {
        $splice: [[sequenceId, 1]]
      }
    }
  })
  return Object.assign({}, state, {
    loops: newLoops
  });
}

function changeInstrument(state, sequenceId, newInstrument) {
  //If you change instrument, new instrument is muted
  //original instrument removes the mute
  let newLoops = update(state.loops, {
    [state.currentLoop]: {
      sequences: {
        [sequenceId]: {
          instrument: {
            $set: newInstrument
          }
        }
      }
    }
  });

  //See if original instrument was muted
  let isOriginalMuted = getMuteFromSequence(state, sequenceId);

  if (isOriginalMuted) {
    //If original was muted, Remove mute from original instrument & mute new instrument
    let originalSoundId = getInstrumentFromSequence(state, sequenceId).id;

    let newSounds = update(state.instruments, {
      [originalSoundId]: {
        sound: {
            $apply: function(x) {
              return x.mute(false);
            }
          
        }
      },
      [newInstrument]: {
        sound: {
            $apply: function(x) {
              return x.mute(true);
            }
          
        }
      }
    });

    return Object.assign({}, state, {
      loops: newLoops,
      sounds: newSounds
    });
  }

  return Object.assign({}, state, {
    loops: newLoops
  });
}

function jumpToBeat(state, newCurrentBeat) {
  return Object.assign({}, state, {
    currentBeat: newCurrentBeat
  });
}

function clearBeats(state) {
  let currentLoop = state.loops[state.currentLoop];
  let emptyPattern = [];
  for(let i=0; i<currentLoop.maxBeats; i += 1) {
    emptyPattern.push(false);
  }

  let newSequences = currentLoop.sequences.map(
    obj => {
      obj.pattern = emptyPattern;
      return obj;
    }
  )

  let newLoops = update(state.loops, {
    [state.currentLoop]: {
      sequences: {
        $apply: function() {
          return newSequences;
        }
      }
    }
  });
  
  return Object.assign({}, state, {
    loops: newLoops
  });
}



export default function reducerJS808 (state: State = initialState, action: Action) {
  switch (action.type) {
    case 'PLAY':
      return play(state);
    case 'PAUSE':
      return pause(state);
    case 'STOP':
      return stop(state);
    case 'ADVANCE_BEAT':
      return advanceBeat(state);
    case 'TOGGLE_BEAT':
      return toggleBeat(state, action.beat, action.sequence);
    case 'PLAY_SOUND':
      return playSound(state);
    case 'CHANGE_CURRENT_LOOP':
      return changeCurrentLoop(state, action.newCurrentLoop);
    case 'CHANGE_BPM':
      return changeBPM(state, action.newBPM);
    case 'MUTE':
      return mute(state, action.sequenceId);
    case 'CHANGE_VOLUME':
      return changeVolume(state, action.sequenceId, action.rangeVolume, action.increment);
    case 'ADD_SEQUENCE':
      return addSequence(state);
    case 'DELETE_SEQUENCE':
      return deleteSequence(state, action.sequenceId);
    case 'CHANGE_INSTRUMENT':
      return changeInstrument(state, action.sequenceId, action.newInstrument);
    case 'JUMP_TO_BEAT':
      return jumpToBeat(state, action.newCurrentBeat);
    case 'CLEAR_BEATS':
      return clearBeats(state);
    default:
      return state;
  }
}