import { connect } from 'react-redux';
import { addSequence } from '../../actions/actions';
import Loop from './Loop';

const mapStateToProps = (state, ownProps) => ({
  loopName: state.loops[state.currentLoop].name,
  maxBeats: state.loops[state.currentLoop].maxBeats,
  currentBeat: state.currentBeat,
  numSequences: state.loops[state.currentLoop].sequences.length
});

const dispatchProps = { addSequence };

const LoopContainer = connect(
  mapStateToProps,
  dispatchProps
)(Loop);

export default LoopContainer;