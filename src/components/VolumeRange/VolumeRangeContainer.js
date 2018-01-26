import { connect } from 'react-redux';
import { changeVolume } from '../../actions/actions';
import {getInstrumentFromSequence, getVolumeFromSequence} from '../../getters';
import VolumeRange from './VolumeRange';

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