import initialState from '../initialState';
import update from 'immutability-helper';
import { getInstrumentFromSequence, getBeat, getSoundFromId, getSoundIndexFromSoundId } from '../getters';

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
        let soundId = getInstrumentFromSequence(state, sequenceNum).sound;
        getSoundFromId(state, soundId).sound.play();
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
  let soundId = getInstrumentFromSequence(state, sequenceId).sound;
  let soundToMute = getSoundFromId(state, soundId);
  let index = getSoundIndexFromSoundId(state, soundId);
  let isMuted = soundToMute.sound.mute();
  let newSounds = update(state.sounds, {
    [index]: {
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
  let soundId = getInstrumentFromSequence(state, sequenceId).sound;
  let soundToChange = getSoundFromId(state, soundId);
  let index = getSoundIndexFromSoundId(state, soundId);
  let currentVolume = soundToChange.sound.volume();
  let newVolume = currentVolume;

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

  let newSounds = update(state.sounds, {
    [index]: {
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
  let defaultInstrument = state.instruments[0].id;
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
  })
  return Object.assign({}, state, {
    loops: newLoops
  });
}


export default function reducerJS808 (state = initialState, action) {
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
    default:
      return state;
  }
}