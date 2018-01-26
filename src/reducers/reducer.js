import initialState from '../initialState';
import update from 'immutability-helper';

//Getter Functions:

function getBeat(state, sequenceId, beatId) {
  const {currentLoop, loops} = state;
  let beat = loops[currentLoop].sequences[sequenceId].pattern[beatId];
  return beat;
}


function getInstrumentFromSequence(state, sequenceId) {
  const {currentLoop} = state;
  let instrumentId = state.loops[currentLoop].sequences[sequenceId].instrument;
  let instrumentIndex = state.instruments.findIndex(x => x.id === instrumentId);
  let instrument = state.instruments[instrumentIndex];
  return instrument;
}

function getSoundFromId(state, soundId){
  let soundIndex = state.sounds.findIndex(x => x.id === soundId);
  let sound = state.sounds[soundIndex];
  return sound;
}

function getSoundIndexFromSoundId(state, soundId){
  let index = state.sounds.findIndex(x => x.id === soundId);
  return index;
}

//Reducer Functions

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
    default:
      return state;
  }
}