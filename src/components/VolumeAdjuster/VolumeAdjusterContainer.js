import { connect } from 'react-redux';
import VolumeAdjuster from './VolumeAdjuster';

const getInstrumentFromSequence = (state, sequenceId) => {
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

const getMuteFromSequence = (state, sequenceId) => {
  let soundId = getInstrumentFromSequence(state, sequenceId).sound;
  let sound = getSoundFromId(state, soundId);
  return sound.sound.mute();
}

const mapStateToProps = (state, ownProps) => ({
  instrumentMute: getMuteFromSequence(state, ownProps.sequenceId)
});

const VolumeAdjusterContainer = connect(
	mapStateToProps,
	null
)(VolumeAdjuster);

export default VolumeAdjusterContainer;