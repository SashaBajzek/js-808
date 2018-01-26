import { connect } from 'react-redux';
import { mute, changeVolume } from '../../actions/actions';
import VolumeButton from './VolumeButton';

const getInstrumentFromSequence = (state, sequenceId) => {
  const {currentLoop} = state;
  let instrumentId = state.loops[currentLoop].sequences[sequenceId].instrument;
  let instrumentIndex = state.instruments.findIndex(x => x.id === instrumentId);
  let instrument = state.instruments[instrumentIndex];
  return instrument;
}

const mapStateToProps = (state, ownProps) => ({
  instrumentMute: getInstrumentFromSequence(state, ownProps.sequenceId).mute,
  soundId: getInstrumentFromSequence(state, ownProps.sequenceId).id,
  instrumentColor: getInstrumentFromSequence(state, ownProps.sequenceId).color
});

const dispatchProps = {
  mute,
  changeVolume
};

const VolumeButtonContainer = connect(
  mapStateToProps,
  dispatchProps
)(VolumeButton);

export default VolumeButtonContainer;