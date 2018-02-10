import * as actions from './actions';
import ActionTypes from './ActionTypes';

describe('actions', () => {
  it('should create an action to play', () => {
    const expectedAction = {
      type:  ActionTypes.PLAY
    }
    expect(actions.play()).toEqual(expectedAction)
  });

  it('should create an action to pause', () => {
    const expectedAction = {
      type:  ActionTypes.PAUSE
    }
    expect(actions.pause()).toEqual(expectedAction)
  });

  it('should create an action to stop', () => {
    const expectedAction = {
      type:  ActionTypes.STOP
    }
    expect(actions.stop()).toEqual(expectedAction)
  });

  it('should create an action to advance the beat', () => {
    const expectedAction = {
      type:  ActionTypes.ADVANCE_BEAT
    }
    expect(actions.advanceBeat()).toEqual(expectedAction)
  });

  it('should create an action to toggle the beat', () => {
    const beat = 1;
    const sequence = 1;
    const expectedAction = {
      type:  ActionTypes.TOGGLE_BEAT,
      beat,
      sequence
    }
    expect(actions.toggleBeat(beat, sequence)).toEqual(expectedAction)
  });

  it('should create an action to play sounds', () => {
    const expectedAction = {
      type:  ActionTypes.PLAY_SOUND
    }
    expect(actions.playSound()).toEqual(expectedAction)
  });

  it('should create an action to change current loop', () => {
    const newCurrentLoop = 1;
    const expectedAction = {
      type:  ActionTypes.CHANGE_CURRENT_LOOP,
      newCurrentLoop
    }
    expect(actions.changeCurrentLoop(newCurrentLoop)).toEqual(expectedAction)
  });

  it('should create an action to change bpm', () => {
    const newBPM = 100;
    const expectedAction = {
      type:  ActionTypes.CHANGE_BPM,
      newBPM
    }
    expect(actions.changeBPM(newBPM)).toEqual(expectedAction)
  });

  it('should create an action to mute', () => {
    const sequenceId = 1;
    const expectedAction = {
      type:  ActionTypes.MUTE,
      sequenceId
    }
    expect(actions.mute(sequenceId)).toEqual(expectedAction)
  });

  it('should create an action to change volume', () => {
    const sequenceId = 1;
    const rangeVolume = 1;
    const increment = 1;
    const expectedAction = {
      type:  ActionTypes.CHANGE_VOLUME,
      sequenceId,
      rangeVolume,
      increment
    }
    expect(actions.changeVolume(sequenceId, rangeVolume, increment)).toEqual(expectedAction)
  });

  it('should create an action to add sequence', () => {
    const expectedAction = {
      type:  ActionTypes.ADD_SEQUENCE
    }
    expect(actions.addSequence()).toEqual(expectedAction)
  });

  it('should create an action to mute', () => {
    const sequenceId = 1;
    const expectedAction = {
      type:  ActionTypes.DELETE_SEQUENCE,
      sequenceId
    }
    expect(actions.deleteSequence(sequenceId)).toEqual(expectedAction)
  });

  it('should create an action to change instrument', () => {
    const sequenceId = 1;
    const newInstrument = "new_instrument";
    const expectedAction = {
      type:  ActionTypes.CHANGE_INSTRUMENT,
      sequenceId,
      newInstrument
    }
    expect(actions.changeInstrument(sequenceId, newInstrument)).toEqual(expectedAction)
  });
});