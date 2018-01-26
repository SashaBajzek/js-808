import { connect } from 'react-redux';
import { changeVolume } from '../../actions/actions';
import VolumeRange from './VolumeRange';

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

const getVolumeFromSequence = (state, sequenceId) => {
  let soundId = getInstrumentFromSequence(state, sequenceId).sound;
  let sound = getSoundFromId(state, soundId);
  return sound.sound.volume();
}

//Sound ID here is suspect
const mapStateToProps = (state, ownProps) => ({
  instrumentVolume: getVolumeFromSequence(state, ownProps.sequenceId),
  instrumentName: getInstrumentFromSequence(state, ownProps.sequenceId).id,
  instrumentColor: getInstrumentFromSequence(state, ownProps.sequenceId).color
});

const dispatchProps = {
  changeVolume
};

const VolumeRangeContainer = connect(
  mapStateToProps,
  dispatchProps
)(VolumeRange);

export default VolumeRangeContainer;