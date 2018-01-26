import { connect } from 'react-redux';
import { getMuteFromSequence } from '../../getters';
import VolumeAdjuster from './VolumeAdjuster';

const mapStateToProps = (state, ownProps) => ({
  instrumentMute: getMuteFromSequence(state, ownProps.sequenceId)
});

const VolumeAdjusterContainer = connect(
	mapStateToProps,
	null
)(VolumeAdjuster);

export default VolumeAdjusterContainer;