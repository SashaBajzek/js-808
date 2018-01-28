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

export function advanceBeat() {
  return {
    type: ActionTypes.ADVANCE_BEAT
  }
}

export function toggleBeat(beat, sequence) {
  return {
    type: ActionTypes.TOGGLE_BEAT,
    beat,
    sequence
  }
}

export function playSound() {
  return {
    type: ActionTypes.PLAY_SOUND
  };
}

export function changeCurrentLoop(newCurrentLoop) {
  return {
    type: ActionTypes.CHANGE_CURRENT_LOOP,
    newCurrentLoop
  };
}

export function changeBPM(newBPM) {
  return {
    type: ActionTypes.CHANGE_BPM,
    newBPM
  };
}

export function mute(sequenceId) {
  return {
    type: ActionTypes.MUTE,
    sequenceId
  };
}

export function changeVolume(sequenceId, rangeVolume, increment) {
  return {
    type: ActionTypes.CHANGE_VOLUME,
    sequenceId,
    rangeVolume,
    increment
  };
}

export function addSequence() {
  return {
    type: ActionTypes.ADD_SEQUENCE
  };
}

export function deleteSequence(sequence) {
  return {
    type: ActionTypes.DELETE_SEQUENCE,
    sequence
  };
}

export function changeInstrument(sequenceId, newInstrument) {
  return {
    type: ActionTypes.CHANGE_INSTRUMENT,
    sequenceId,
    newInstrument
  };
}