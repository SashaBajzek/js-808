export const getInstrumentFromSequence = (state, sequenceId) => {
  const {currentLoop} = state;
  let instrumentId = state.loops[currentLoop].sequences[sequenceId].instrument;
  let instrument = state.instruments[instrumentId];
  return instrument;
}

export const getVolumeFromSequence = (state, sequenceId) => {
  let sound = getInstrumentFromSequence(state, sequenceId).sound;
  return sound.volume();
}

export const getMuteFromSequence = (state, sequenceId) => {
  let sound = getInstrumentFromSequence(state, sequenceId).sound;
  //Before howls are fully initialized, muted property doesn't work yet
  //typeof catches this
  if(typeof sound.mute() !== "boolean") {
    return false;
  } else if(sound.volume() < 0.01) {
    //clicking volume down to zero equates to mute
    //clicking down to zero doesn't make it exactly to zero, so using 0.01
    return true;
  } else {
    return sound.mute();
  }
}

export const getBeat = (state, sequenceId, beatId) => {
  let beat = state.loops[state.currentLoop].sequences[sequenceId].pattern[beatId];
  return beat;
}

export const getAvailableInstruments = (state) => {
  let availableInstruments = [];
  //Add all instruments to array
  for (var instrument in state.instruments) {
    availableInstruments.push(state.instruments[instrument]);
  }
  //Removed instruments that are used already
  state.loops[state.currentLoop].sequences.forEach((sequence) => {
    var index = availableInstruments.findIndex(function(obj) {return obj["id"] === sequence.instrument});
    availableInstruments.splice(index, 1);
  })
  return availableInstruments;
}