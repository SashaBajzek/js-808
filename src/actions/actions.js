import ActionTypes from './ActionTypes';

export function play() {
  return {
    type: ActionTypes.PLAY
  };
}

export function pause() {
  return {
    type: ActionTypes.PAUSE
  };
}

export function stop() {
  return {
    type: ActionTypes.STOP
  };
}

export function mute(soundId) {
  return {
    type: ActionTypes.MUTE,
    soundId
  };
}

export function increaseVolume(soundId, increment) {
  return {
    type: ActionTypes.INCREASE_VOLUME,
    soundId,
    increment
  };
}

export function decreaseVolume(soundId, increment) {
  return {
    type: ActionTypes.DECREASE_VOLUME,
    soundId,
    increment
  }
}

export function changeBPM(newBPM) {
  return {
    type: ActionTypes.CHANGE_BPM,
    newBPM
  };
}

export function changeCurrentLoop(loop) {
  return {
    type: ActionTypes.CHANGE_CURRENT_LOOP,
    loop
  };
}

export function advanceBeat() {
  return {
    type: ActionTypes.ADVANCE_BEAT
  };
}

export function playSound() {
  return {
    type: ActionTypes.PLAY_SOUND
  };
}

/*
Later add:

export function addSequence(newSequence) {
  return {
    type: ActionTypes.ADD_SEQUENCE,
    newSequence
  };
}

export function deleteSequence(sequence) {
  return {
    type: ActionTypes.DELETE_SEQUENCE,
    sequence
  };
}

export function changeInstrument(sequence, soundId) {
  return {
    type: ActionTypes.CHANGE_INSTRUMENT,
    sequence,
    soundId
  };
}


*/