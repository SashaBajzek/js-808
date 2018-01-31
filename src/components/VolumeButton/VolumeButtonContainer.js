import { connect } from 'react-redux';
import { mute, changeVolume } from '../../actions/actions';
import {getInstrumentFromSequence} from '../../getters';
import VolumeButton from './VolumeButton';

const mapStateToProps = (state, ownProps) => ({
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