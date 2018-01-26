import { connect } from 'react-redux';
import Beat from './Beat';
import { getInstrumentFromSequence, getBeat } from '../../getters';
import { toggleBeat } from '../../actions/actions';

const mapStateToProps = (state, ownProps) => ({
  beatOn: getBeat(state, ownProps.sequenceId, ownProps.beatId),
  color: getInstrumentFromSequence(state, ownProps.sequenceId).color,
  currentBeat: state.currentBeat
});

const dispatchProps = { toggleBeat };

const BeatContainer = connect(
  mapStateToProps,
  dispatchProps
)(Beat);

export default BeatContainer;