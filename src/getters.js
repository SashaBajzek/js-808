export const getInstrumentFromSequence = (state, sequenceId) => {
  const {currentLoop} = state;
  let instrumentId = state.loops[currentLoop].sequences[sequenceId].instrument;
  let instrumentIndex = state.instruments.findIndex(x => x.id === instrumentId);
  let instrument = state.instruments[instrumentIndex];
  return instrument;
}

export const getSoundFromId = (state, soundId) => {
  let soundIndex = state.sounds.findIndex(x => x.id === soundId);
  let sound = state.sounds[soundIndex];
  return sound;
}

export const getVolumeFromSequence = (state, sequenceId) => {
  let soundId = getInstrumentFromSequence(state, sequenceId).sound;
  let sound = getSoundFromId(state, soundId);
  return sound.sound.volume();
}

export const getMuteFromSequence = (state, sequenceId) => {
  let soundId = getInstrumentFromSequence(state, sequenceId).sound;
  let sound = getSoundFromId(state, soundId);
  return sound.sound.mute();
}

export const getBeat = (state, sequenceId, beatId) => {
  let beat = state.loops[state.currentLoop].sequences[sequenceId].pattern[beatId];
  return beat;
}

export const getSoundIndexFromSoundId = (state, soundId) => {
  let index = state.sounds.findIndex(x => x.id === soundId);
  return index;
}

export const getAvailableInstruments = (state) => {
  let availableInstruments = [];
  let used = false;
  state.instruments.forEach((instrument) => {
    if (
      state.loops[state.currentLoop].sequences.find(function (obj) { return obj.instrument === instrument.id;})
    ){

    } else {
      availableInstruments.push(instrument);
    }
  })

  return availableInstruments;
}