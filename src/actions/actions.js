import ActionTypes from './ActionTypes';

type PlayAction = { type: "PLAY" };

export function play(): PlayAction {
  return {
    type: ActionTypes.PLAY
  };
}


type PauseAction = { type: "PAUSE" };

export function pause(): PauseAction {
  return {
    type: ActionTypes.PAUSE
  };
}


type StopAction = { type: "STOP" };

export function stop(): StopAction {
  return {
    type: ActionTypes.STOP
  };
}


type AdvanceBeatAction = { type: "ADVANCE_BEAT" };

export function advanceBeat(): AdvanceBeatAction {
  return {
    type: ActionTypes.ADVANCE_BEAT
  }
}


type ToggleBeatAction = { 
  type: "TOGGLE_BEAT",
  beat: number,
  sequence: number
};

export function toggleBeat(beat: number, sequence: number): ToggleBeatAction {
  return {
    type: ActionTypes.TOGGLE_BEAT,
    beat,
    sequence
  }
}


type PlaySoundAction = { type: "PLAY_SOUND" };

export function playSound(): PlaySoundAction {
  return {
    type: ActionTypes.PLAY_SOUND
  };
}


type ChangeCurrentLoopAction = { 
  type: "CHANGE_CURRENT_LOOP",
  newCurrentLoop: number
};

export function changeCurrentLoop(newCurrentLoop): ChangeCurrentLoopAction {
  return {
    type: ActionTypes.CHANGE_CURRENT_LOOP,
    newCurrentLoop
  };
}


type ChangeBPMAction = { 
  type: "CHANGE_CURRENT_LOOP",
  newBPM: number
};

export function changeBPM(newBPM): ChangeBPMAction {
  return {
    type: ActionTypes.CHANGE_BPM,
    newBPM
  };
}


type MuteAction = { 
  type: "MUTE",
  sequenceId: number
};

export function mute(sequenceId): MuteAction {
  return {
    type: ActionTypes.MUTE,
    sequenceId
  };
}


type ChangeVolumeAction = { 
  type: "CHANGE_VOLUME",
  sequenceId: number,
  rangeVolume: number,
  increment: number
};

export function changeVolume(sequenceId, rangeVolume, increment): ChangeVolumeAction {
  return {
    type: ActionTypes.CHANGE_VOLUME,
    sequenceId,
    rangeVolume,
    increment
  };
}


type AddSequenceAction = { type: "ADD_SEQUENCE" };

export function addSequence(): AddSequenceAction {
  return {
    type: ActionTypes.ADD_SEQUENCE
  };
}


type DeleteSequenceAction = { 
  type: "DELETE_SEQUENCE",
  sequenceId: number
};

export function deleteSequence(sequenceId): DeleteSequenceAction {
  return {
    type: ActionTypes.DELETE_SEQUENCE,
    sequenceId
  };
}


type ChangeInstrumentAction = { 
  type: "CHANGE_INSTRUMENT",
  sequenceId: number,
  newInstrument: string
};

export function changeInstrument(sequenceId, newInstrument): ChangeInstrumentAction {
  return {
    type: ActionTypes.CHANGE_INSTRUMENT,
    sequenceId,
    newInstrument
  };
}

type JumpToBeatAction = {
  type: "JUMP_TO_BEAT",
  newCurrentBeat: number
};

export function jumpToBeat(newCurrentBeat): JumpToBeatAction {
  return {
    type: ActionTypes.JUMP_TO_BEAT,
    newCurrentBeat
  };
}

type ClearBeatsAction = {
  type: "CLEAR_BEATS"
};

export function clearBeats(): ClearBeatsAction {
  return {
    type: ActionTypes.CLEAR_BEATS
  };
}


export type Action = 
  | PlayAction
  | PauseAction
  | StopAction
  | AdvanceBeatAction
  | ToggleBeatAction
  | PlaySoundAction
  | ChangeCurrentLoopAction
  | ChangeBPMAction
  | MuteAction
  | ChangeVolumeAction
  | AddSequenceAction
  | DeleteSequenceAction
  | ChangeInstrumentAction
  | JumpToBeatAction;